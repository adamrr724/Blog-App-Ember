import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    addNewComment() {
      var params = {
        name: this.get('name'),
        rating: this.get('rating'),
        body: this.get('body'),
        post: this.get('post')
      };
      this.sendAction('addNewComment2', params);
    }
  }
});
