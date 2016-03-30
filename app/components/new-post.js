import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    showNewPostForm(){
      this.set('addNewPost', true);
    }
    addNewPost(){
      var params {
        title: this.get('title'),
        author: this.get('author'),
        date: this.get('date'),
        body: this.get('body'),
        image: this.get('image')
      }
      this.sendAction('addNewPost2', params);
    }
  }
});
