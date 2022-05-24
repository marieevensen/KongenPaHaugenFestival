export default {
    title: 'Programs',
    name: 'programs',
    type: 'document',
    fields: [
        {
            title: 'Name of day',
            name: 'nameOfDay',
            type: 'string'
        },
        {
            title: 'Concerts',
            name: 'concerts',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'concerts' }] 
                }
            ]
        },
        {
            title: 'Date',
            name: 'date',
            type: 'date'
        }
    ]
}