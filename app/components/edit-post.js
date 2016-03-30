import Ember from 'ember';

export default Ember.Component.extend({
  editPost: false,

  actions: {
    editPost() {
      this.set('editPost', true);
    },
    savePost(post) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        date: this.get('date'),
        body: this.get('body'),
        image: this.get('image')
      };
      this.sendAction('savePost2', post, params);
      this.set('editPost', false);
    }
  }


});
