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
            description: 'Here you can write what includes in the price. Remember the agelimit.',
            type: 'text'
        },
        {
            title: 'Price',
            name: 'price',
            description: 'The minimum price is 500 and the maximum price is 4000.',
            type: 'number',
            validation: Rule => Rule.required().min(500).max(4000)
        }
    ]
}