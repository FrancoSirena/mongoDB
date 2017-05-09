import Alt from '../alt';
import AddCharacterActions from '../actions/AddCharacterActions';

class AddCharacterStore {
    constructor() {
        this.bindActions(AddCharacterActions);
        this.name  = '';
        this.gender = '';
        this.helpBlock = '';
        this.nameValidationState = '';
        this.genderValidationState = '';
    }
    onAddCharacterSuccess(successMessage) {
        this.nameValidationState = 'has-success';
        this.helpBlock = successMessage;
    }

    onAddCharacterFail(jqXhr) {
        this.nameValidationState= 'has-error'
        this.helpBlock = jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText
    }

    onUpdateName(e) {
        this.name = e.target.value;
        this.nameValidationState='';
        this.helpBlock='';
    }

    onUpdateGender(e) {
        this.gender = e.target.value;
        this.genderValidationState= '';
    }

    onInvalidName() {
        this.nameValidationState='has-error';
        this.helpBlock='Please enter a character name.';
    }

    onInvalidGender() {
        this.genderValidationState='has-error';
    }

}

export default Alt.createStore(AddCharacterStore);