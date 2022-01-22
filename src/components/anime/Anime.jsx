import React, { useEffect, useState } from 'react';
import '../../index.css';

const Anime = () => {

  const [showGif, setShowGif] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const url = 'http://api.giphy.com/v1/gifs/search?q=anime&limit=12&api_key=fTlcugxLI3CvVFv3R8PXr6d2YQglfva5';

  const getGifs = async() =>{
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gif = data.map(gif => {
      return{
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url
      }
    })

    setShowGif(gif);
  }

  return (
    <div className='contenedor'>
      <header className='contenedor-header'>
        <h1>Anime</h1>
      </header>

      <section className='contenedor-imagenes'>
          {
            showGif.map(img => (
              <div key={img.id} className='contenido-imagenes'>
                <img src={img.url} alt={img.title} />
                <p>{img.title}</p>
              </div>
            ))
          }
      </section>
    </div>
  );
}

export default Anime;
