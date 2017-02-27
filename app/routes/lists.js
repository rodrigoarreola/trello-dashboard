//ember g route lists
import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		//Retornar las vistas que se generen en nuestro modelo 
		//a traves de un Object Relational Mapper ORM
		
		return this.store.findAll("list"); //devuelve todas las listas que se han guardado al momento
	}
});
