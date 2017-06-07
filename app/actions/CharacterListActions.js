import Alt from '../alt';

class CharacterListActions {
    constructor() {
        this.generateActions(
            'getCharacterSuccess',
            'getCharacterFail'
        );
    }
    getCharacters(payload){
        let url= '/api/characters/top';
        let params = {
            race: payload.race,
            bloodline: payload.bloodline
        };
        if (payload.category== 'female'){
            params.gender = 'female';
        } else if (payload.category == 'male') {
            params.gender = 'male';
        }
        if (payload.category == 'shame')
            url = '/api/shame';

        $.ajax({
            url: url,
            data: params
        }).done((data)=> {
            this.actions.getCharacterSuccess(data);
        }).fail((jqXhr)=>{
            this.actions.getCharacterFail(jqXhr);
        })
    }
}

export default Alt.createActions(CharacterListActions);