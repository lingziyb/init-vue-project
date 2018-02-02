console.log( 'index' );

import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use( VueRouter );

const router = new VueRouter( {
	mode: 'history',
	routes
} );

// Vue.config.productionTip = false;

new Vue( {
	el: '#app',
	router,
	render: h => h( App )
} );
