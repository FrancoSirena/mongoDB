import Alt from '../alt';

class CharacterActions {
    constructor() {
        this.generateActions (
            'reportSuccess',
            'reportFail',
            'getCharacterSuccess',
            'getCharacterFail'
        )
    }
    getCharacter(characterId) {
        $.ajax({
            url: '/api/characters/' + characterId
        })
        .done((data) => {
            this.actions.getCharacterSuccess(data);
        })
        .fail((jqXhr)=>{
            this.actions.getCharacterFail(jqXhr);
        });
    }
    report(characterId) {
        $.ajax({
            type: 'post',
            url: '/api/report/',
            data: { characterId : characterId }
        })
        .done(()=> {
            this.actions.reportSuccess();
        })
        .fail((jqXhr)=> {
            this.actions.reportFail(jqXhr);
        })
    }
}

export default Alt.createActions(CharacterActions);