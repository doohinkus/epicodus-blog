import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    reviewFormShow() {
      this.set('addNewComment', true);
    },
    saveComment() {
     var params = {
       words: this.get('words'),
       rating: this.get('rating'),
       post: this.get('post')
     };
     this.set('addNewComment', false);
     this.sendAction('saveComment', params);
   }
  }
});
