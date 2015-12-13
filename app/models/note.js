import DS from 'ember-data';

export default DS.Model.extend({
  title: attr('string');
  body: attr('string');
  notebook: DS.belongsTo('notebook')  
});
