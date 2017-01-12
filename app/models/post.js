import DS from 'ember-data';

export default DS.Model.extend({
author: DS.attr(),
title: DS.attr(),
image: DS.attr(),
body: DS.attr(),
comments: DS.hasMany('comment', { async: true })
});
