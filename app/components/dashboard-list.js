//ember g component dashboard-list
//fun fact los component deben de llevar un ' - ' debido a los estandares de los webcomponents por si en 
//algun futuro se crea un etiqueta html 'list' esto los diferenciaría 
import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		delete(){
			//el selector $ solo selecciona cosas dentro del componente, sino le pasas nada devuelve todo el componente
			this.$().slideUp('normal', ()=>{
				//el metodo deleteRecord() sale del data store de ember
				this.list.deleteRecord();
				this.list.save();
			});
		}
	}
});
