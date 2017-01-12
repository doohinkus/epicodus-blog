import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(post) {
     var params = {
       author: this.get('author'),
       title: this.get('title'),
       image: this.get('image'),
       body: this.get('body')
     };
     this.sendAction('update', post, params);
   }
 }
});
