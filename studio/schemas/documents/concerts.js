export default {
    title: 'Concerts',
    name: 'concerts',
    type: 'document',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string'
        },
        {
            title: 'Artists',
            name: 'artists',
            type: 'reference',
            to: [
                { type: 'artists' }
            ] 
        },
        {
            title: 'Datetime',
            name: 'datetime',
            type: 'datetime',
            options: {
                dateFormat: 'DD-MM-YYYY',
                timeFormat: 'HH:mm'
            }
        }
    ]
}