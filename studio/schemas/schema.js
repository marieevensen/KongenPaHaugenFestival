import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import about from './documents/about.js';
import artists from './documents/artists.js';
import concerts from './documents/concerts.js';
import contact from './documents/contact.js';
import tickets from './documents/tickets.js';


export default createSchema({
	name: 'default',
	types: schemaTypes.concat([
		about,
		artists,
		concerts,
		contact,
		tickets
	]),
})
