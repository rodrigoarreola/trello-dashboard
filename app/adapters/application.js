import { LSAdapter } from 'ember-localstorage-adapter';

export default LSAdapter.extend({
	namespace:"Dashboard" //separa nuestros datos de otras aplicaciones en el localstorage
});