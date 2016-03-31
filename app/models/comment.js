import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  rating: DS.attr(),
  body: DS.attr(),
  post: DS.belongsTo('post', {async: true})
});
