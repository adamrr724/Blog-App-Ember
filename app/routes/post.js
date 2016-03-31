import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    addNewComment3(params) {
      console.log("addNewComment step 3")
      //when we save a new child record(Comment) to a parent record(Post), we must save both sides of the relationship. In the addNewComment3() action, we first identify the new post object and the comment it will belong to. Then we add the new post to the posts attribute of our current comment using the .addObject(); method. Next we save the 
      var newComment = this.store.createRecord('comment', params);//Create a new comment with the information from our parameters, save it to the database, and call it "newComment".
      var post = params.post;//Refer to the post in those parameters as "post".
      post.get('comments').addObject(newComment);//Retrieve the list of comments located in "post", and add "newComment" to that list.
      newComment.save().then(function(){//Save "newComment", so it remembers what post it belongs in.
        return post.save();//Wait until "newRental" has finished saving, then save "post'" too, so it remembers it contains "newRental".
      });
      this.transitionTo('post', params.post);//Afterwards, take us to the page displaying details for "post".
    }
  }






});
