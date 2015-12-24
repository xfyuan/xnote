import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query('notebook', { user: params.user_id });
  },

  actions: {
    addNotebook() {
      var notebook = this.store.createRecord('notebook', {
        title: this.controller.get('title'),
        user: this.controllerFor('application').get('user')
      });
      notebook.save().then(()=> {
        this.logger.log('save successful');
        this.controller.set('title', null);
        this.refresh();
      }, ()=> {
        this.logger.log('save failed');
      });
    }
  }
});
