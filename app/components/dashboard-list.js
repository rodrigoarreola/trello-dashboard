//ember g component dashboard-list
//los componentes son como 'widgets' de la vista que podemos ir reciclando
//fun fact los component deben de llevar un ' - ' debido a los estandares de los webcomponents por si en
//algun futuro se crea un etiqueta html 'list' esto los diferenciaría
import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		delete(){
			//el selector $ solo selecciona cosas dentro del componente, sino le pasas nada devuelve todo el componente
			//se utiliza el 'fat-arrow' => para conservar el valor del 'this'
			this.$().fadeOut('normal', ()=>{
				//el metodo deleteRecord() sale del data store de ember
				this.list.deleteRecord();
				this.list.save();
			});
		},

		addItem(){
			//aca no tenemos acceso al objeto store así que hacemos una especie de
			//public del action para 'subirlo'
			//la accion se envia primero al controlador si nadie responde se envía a las rutas
			this.sendAction('action', this.itemDescription, this.list);
		},

		hideForm(){
			this.$(".form-hide").hide();
		},

		showForm(){
			this.$(".form-hide").show();
		}
	}
});
