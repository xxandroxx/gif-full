import React, { useEffect, useState } from 'react';
import './home.css';

const Home = () => {

    const [showGif, setShowGif] = useState([]);

    useEffect(() => {
      getGifs();
    }, []);

  const url = "https://api.giphy.com/v1/gifs/search?q=welcome&limit=12&api_key=fTlcugxLI3CvVFv3R8PXr6d2YQglfva5";

  const getGifs = async() =>{
    const resp = await fetch(url);
    const {data} = await resp.json();
  
    const gif = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.original.url
    }));

    setShowGif(gif);
    
  }

   

  return (
    <div className='contenedor'>
      <header className='contenedor-header'>
        <h1>Bienvenido</h1>
        <h3>El mejor sitio para buscar gifs</h3>
      </header>

      <section className='contenedor-imagenes'>
        {
          showGif.map(img =>(
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

export default Home;
