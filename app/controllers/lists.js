//ember g controller lists
import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		create(){
			//esto no lo hace persistente (para guardarlo en el storage)
			var list = this.store.createRecord("list", {
				title: this.listTitle
			})

			list.save(); //ahora es persistente
		}
	}
});
