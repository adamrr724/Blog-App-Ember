import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    showNewPostForm(){
      this.set('addNewPost', true);
    }
  }
});
