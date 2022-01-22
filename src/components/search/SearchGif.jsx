import React, { useEffect, useState } from 'react';

const SearchGif = ({category}) => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);


  const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=12&api_key=fTlcugxLI3CvVFv3R8PXr6d2YQglfva5`;

  const getGifs = async() =>{
      const resp = await fetch(url);
      const {data} = await resp.json();

      const gif = data.map(img => {
          return{
              id: img.id,
              title: img.title,
              url: img.images.original.url
          }
      })

      setCategories(gif);
      console.log(gif);
  }

  return (
    <div className='contenedor'>
      <header className='contenedor-header'>
        <h1>{category}</h1>
      </header>

      <section className='contenedor-imagenes'>
        {
          categories.map(img => (
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

export default SearchGif;
