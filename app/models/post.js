import DS from 'ember-data';

export default DS.Model.extend({
author: DS.attr(),
title: DS.attr(),
category: DS.attr(),
image: DS.attr(),
body: DS.attr()
});
