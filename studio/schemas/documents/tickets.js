export default {
    title: 'Tickets',
    name: 'tickets',
    type: 'document',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string'
        },
        {
            title: 'Description',
            name: 'description',
            type: 'text'
        },
        {
            title: 'Price',
            name: 'price',
            type: 'number',
            validation: Rule => Rule.required().min(500).max(4000)
        }
    ]
}