import Ember from 'ember';

export default Ember.Component.extend({
  editPost: false,

  actions: {
    editPost() {
      this.set('editPost', true);
    },
    savePost(post) {
      this.sendAction('savePost2', post);
      this.set('editPost', false);
    },
    hidePost() {
      this.set('editPost', false);
    }
  }


});
