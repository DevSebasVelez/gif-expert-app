

// Petición HTTP
export const getGifs = async ( category ) => {

    const api_key = 'h0HIsf58m8S0eiENptK8Zr0J2MkR8FGh';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=20`;
    const res = await fetch( url );
    const {data} = await res.json();

    // console.log(data);

    const gifs = data.map( img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      }
    })

    return gifs;
  }

