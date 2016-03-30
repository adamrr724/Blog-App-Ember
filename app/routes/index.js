import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('posts');
  }//eHre, we specify this.store to refer to the Firebase data store we've set up for our application. Then the findAll method with the argument rental instructs Ember Data to find all records of the type posts in the store, and return them to our application.
});
