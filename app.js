var http = require('http'),
    MongoClient = require('mongodb').MongoClient,
    port = 3000;

    
var server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json');
    res.statusCode = 200;

    switch(req.method){
        case 'GET': handleGet(req, res); break;
        case 'POST': handlePost(req, res); break;
    }

});

function handleGet(req, res) {
    MongoClient.connect('mongodb://localhost:27017/treinaweb', (err, db) => {
        db.collection('cursos').find().sort({'nome': 1}).toArray((err, result) => {
            res.write(JSON.stringify(result));
            res.end();
        });
    })
}

function handlePost(req, res) {
    var body =[];
    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end',() => {
        body = Buffer.concat(body).toString();
        var obj = JSON.parse(body);

        MongoClient.connect('mongodb://localhost:27017/treinaweb', (err, db) => {
            db.collection('cursos').insertOne(obj, () => {
                handleGet(req, res);
            })
        })
    })

}



console.log(`Listening on port ${port}`);
server.listen(port);