import DS from 'ember-data';

export default DS.Model.extend({
  words: DS.attr(),
  rating: DS.attr(),
  post: DS.belongsTo('post', { async: true })
});
