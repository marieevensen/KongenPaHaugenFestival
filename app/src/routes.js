import Home from './views/Home.vue';
import About from './views/About.vue';
import Artists from './views/Artists.vue';
import Contact from './views/Contact.vue';
import Program from './views/Program.vue';
import Tickets from './views/Tickets.vue';

export default [
	{ name: 'home', path: '/', component: Home },
	{ name: 'about', path: '/about', component: About },
	{ name: 'artists', path: '/artists', component: Artists },
	{ name: 'contact', path: '/contact', component: Contact },
	{ name: 'program', path: '/program', component: Program },
	{ name: 'tickets', path: '/tickets', component: Tickets },
];