import Ember from 'ember';

export default Ember.Component.extend({
  editPost: false,

  actions: {
    editPost() {
      this.set('editPost', true);
    },
    save
  }


});
