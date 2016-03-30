import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('post');
  },
  actions: {
    addNewPost3(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('admin');
    },
    delete(post) {
      if(confirm("Are you sure you would like to delete this post?")) {
        post.destroyRecord();
        this.transitionTo('admin');
      }
    },
    savePost3(post) { 
      post.save();
      this.transitionTo('admin');
    }
  }

});
