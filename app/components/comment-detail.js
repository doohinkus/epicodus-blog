import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  delete(comment) {
    if (confirm('Are you sure you want to delete this comment?')) {
      this.sendAction('destroyComment', comment);
    }
  },
  update(comment) {
    var params = {
      words: this.get('words'),
      rating: this.get('rating'),
    };
    this.sendAction('update', comment, params);
  }
}
});
