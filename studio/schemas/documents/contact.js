export default {
    title: 'Contact Info',
    name: 'contactInfo',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Mail',
            name: 'mail',
            description: 'Write the festivals mail.',
            type: 'string'
        },
        {
            title: 'Number',
            name: 'number',
            description: 'Write the festivals phonenumber.',
            type: 'number'
        },
        {
            title: 'Quote',
            name: 'quote',
            description: 'Write the nice quote.',
            type: 'text'
        }
    ]
}