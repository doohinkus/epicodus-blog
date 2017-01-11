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
   },
   savePost(params) {
    var newPost = this.store.createRecord('post', params);
    newPost.save();
    this.transitionTo('index');
  },
  }
});
