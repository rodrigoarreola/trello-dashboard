//ember g model list
import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string')
});
