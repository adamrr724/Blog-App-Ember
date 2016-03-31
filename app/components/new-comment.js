import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    addNewComment() {
      console.log("addNewComment Step 1");
      var params = {
        name: this.get('name'),
        rating: this.get('rating'),
        body: this.get('body'),
        post: this.get('post')
      };
      this.sendAction('addNewComment2', params);
      this.set('name', '');
      this.set('rating', '');
      this.set('body', '');
    }
  }
});
