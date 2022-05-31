export default {
    title: 'About',
    name: 'about',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            description: 'Write the title of the page.',
            type: 'string'
        },
        {
            title: 'Description',
            name: 'description',
            description: 'Write about the festival.',
            type: 'text'
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image'
        }
    ]
}