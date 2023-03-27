import React from "react";
import styles from "../carrusel/carrusel.module.css";
import Carousel from 'react-bootstrap/Carousel';
import { useSelector } from "react-redux";
const URL_IMAGE = "https://image.tmdb.org/t/p/original";


const Carrusel = () => {
  const movies = useSelector((state) => state.movies);
    return (
       <div className={styles.contenedorcarrusel}> 
        <Carousel>
          {movies?.map((movie) => (
            
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`${URL_IMAGE}/${movie.poster_path}`}
            alt={movie.title}
          />
          <Carousel.Caption>
            <h3>{movie.title}</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        ))}
        
        
      </Carousel>
      </div>
    );
};


export default Carrusel;