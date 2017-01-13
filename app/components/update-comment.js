import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(comment) {
     var params = {
       words: this.get('words'),
       rating: this.get('rating')
     };
     this.sendAction('update', comment, params);
   }
 }
});
