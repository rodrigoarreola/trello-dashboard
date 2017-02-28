//ember g controller lists
import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		create(){
			//esto no lo hace persistente (para guardarlo en el storage)
			var list = this.store.createRecord("list", {
				title: this.listTitle
			});

			list.save(); //ahora es persistente
		},

		addItem(description, list){
			//acá guardamos el item porque ya tenemos acceso al store
			var item = this.store.createRecord("item", {
				//después tenemos que pasar un JSON con los datos que vamos a guardar
				description: description
			});

			//devolvemos los items de la lista en cuestion
			//list.get("items") retorna un 'array promise' es decir va a retornar el arreglo pero
			//no sabe cuando, para que sepamos cuando hacemos uso de then() donde pasamos una
			//funcion que se ejecuta cuando la promesa se cumple es decir tenemos acceso a los items
			list.get("items").then(()=>{
				list.get("items").addObject(item);
				item.save();
				list.save();
			})
		}
	}
});
