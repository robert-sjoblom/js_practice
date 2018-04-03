export default function processData( {type, result} ) {
    const collection = [];
    if (type === "artist") {
        result.artists.items.forEach(({name, uri, images}) => {
            collection.push( { name, uri, images } )
        })
    } else {
        result.tracks.items.forEach(({name, uri, album}) => {
            const {images} = album;
            collection.push( {name, uri, images} );
        });
    }
    return collection;
}