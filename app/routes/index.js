import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      images: this.store.findAll('image')
    });
  },
  actions:{
    destroyPost(post) {
     post.destroyRecord();
     this.transitionTo('index');
   }
  }
});
