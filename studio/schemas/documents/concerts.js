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
            title: 'Date',
            name: 'date',
            description: 'Write the date when the artist will be performing.',
            type: 'date'
        },
        {
            title: 'Time',
            name: 'time',
            description: 'Write the time when the artist will be performing.',
            type: 'string'
        }
    ]
}