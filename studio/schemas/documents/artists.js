export default {
    title: 'Artists',
    name: 'artists',
    type: 'document',
    fields: [
        {
            title: 'Artistname',
            name: 'artistname',
            type: 'string'
        },
        {
            title: 'Name',
            name: 'name',
            type: 'array',
            of: [
                { type: 'string' }
            ]
        },
        {
            title: 'Latest album',
            name: 'latestAlbum',
            type: 'array',
            of: [
                { type: 'string' }
            ]
        },
        {
            title: 'Link to Spotify',
            name: 'linkToSpotify',
            type: 'url'
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image',
        }
    ]
}