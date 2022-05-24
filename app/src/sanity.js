import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: 'x8lfnpuo',
  	dataset: 'production',
  	apiVersion: '2022-05-03',
  	useCdn: false
});