import Alt from '../alt';

class HomeActions {
    constructor() {
        this.generateActions(
            'getTwoCharactersSuccess',
            'getTwoCharactersFail',
            'voteFail'
        );
    }
    getTwoCharacters() {
        $.ajax({
            url: '/api/characters'
        })
        .done((data)=> {
            this.actions.getTwoCharactersSuccess(data);
        })
        .fail((jqXhr)=> {
            this.actions.getTwoCharactersFail(jqXhr);
        })
    }
    vote(winner, loser) {
        $.ajax({
            type: 'PUT',
            url: '/api/characters',
            data: {winner: winner,loser: loser}
        })
        .done(()=> {
            this.actions.getTwoCharacters();
        })
        .fail((jqXhr) => {
            this.actions.voteFail(jqXhr);
        })
    }
}

export default Alt.createActions(HomeActions);