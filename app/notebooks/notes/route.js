import Ember from 'ember';
import ValidationFunctions from 'xnote/mixins/validation-functions';

export default Ember.Route.extend(ValidationFunctions, {
  model(params) {
    return this.store.query('note', { notebook: params.notebook_id });
  },

  actions: {
    addNote() {
      var title = this.controller.get('title');
      if (!this.isValidLength(title, 0, 140)) {
        alert('Title must be longer than 0 and not more than 140');
      } else {
        this.store.findRecord('notebook', this.paramsFor('notebooks.notes').notebook_id).then((notebook)=> {
          console.log(notebook);
          var note = this.store.createRecord('note', {
            title: this.controller.get('title'),
            notebook: notebook
          });
          console.log(note);
          note.save().then(()=> {
            console.log('save successful');
            this.controller.set('title', null);
            this.refresh();
          }, ()=> {
            console.log('save failed');
          });
        });
      }
    },
    deleteNote(note) {
      console.log('deleting note with title' + note.get('title'));
      note.deleteRecord();
      note.save();
    }
  }
});
