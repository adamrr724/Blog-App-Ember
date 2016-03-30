import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  date: new Date().getFullYear()+"-"+(new Date().getMonth()+1)+"-"+new Date().getDate(),
  actions: {
    showNewPostForm(){
      console.log(this.date);
      this.set('addNewPost', true);
    },
    addNewPost(){
      if(this.get('date').length <= 0 ) {//date returns as an empty string when no date is entered. check for length.
        alert('Please add a date for your post');
      } else {
        var params = {
          title: this.get('title'),
          author: this.get('author'),
          date: this.get('date'),
          body: this.get('body'),
          image: this.get('image')
        };
        this.sendAction('addNewPost2', params);
        this.set('addNewPost', false);
      }
    }
  }
});
