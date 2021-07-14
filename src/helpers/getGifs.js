export const getGifs = async( category ) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=ug1nlNbPVd7ypcFqz1w56Hl8eLdiri3C`
    const resp = await  fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
        
    return gifs;
}