import DS from 'ember-data';
//DS short of data store
export default DS.Model.extend({
    description: DS.attr("string"),
    //Relación 1:M
    list: DS.belongsTo("list")
});
