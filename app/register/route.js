import Ember from 'ember';
import ValidationFunctions from 'xnote/mixins/validation-functions';

export default Ember.Route.extend(ValidationFunctions, {
  actions: {
    addNew() {
      var name = this.controller.get('name');
      if (this.isValidEmail(name)) {
        var user = this.store.createRecord('user', { name: name });
        user.save().then( ()=> {
          this.logger.log('save successful');
          this.controller.set('message', 'A new user with name' + this.controller.get('name') + ' was added!');
          this.controller.set('name', null);
        }, ()=> {
          this.logger.log('save failed!');
        });
      } else {
        alert('Invalid email address');
      }
    }
  }
});
