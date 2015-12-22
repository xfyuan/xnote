import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveNote() {
      this.get('note').save();
    },
    closeNote() {
      this.sendAction('close');
    }
  }
});
