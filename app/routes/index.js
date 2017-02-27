import Ember from 'ember';

export default Ember.Route.extend({
	redirect: function() {
		this.transitionTo("lists"); //no es igual a un redireccionamiento es decir la pagina no se recarga 
	}
});