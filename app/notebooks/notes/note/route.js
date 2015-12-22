import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('note', params.note_id);
  },

  actions: {
    close() {
      this.transitionTo('notebooks.notes');
    }
  }
});
