import React, {useState} from "react";
import { useParams } from "react-router-dom";

const API = process.env.API;

const Detail = () => {

    const { id } = useParams();

    const [movie, setMovie] = useState({});

    React.useEffect(() => {
        obtenerDatos();
    }, []);

    const obtenerDatos = async () => {
        const data = await fetch(`${API}&t=${id}&plot=full`);
        const movies = await data.json();
        setMovie(movies);
    }

    const trailers = (titulo) => {
        if (titulo == "Dune") {
          return (
            <div>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/mSY_NbSmaUI?si=LlCII-jkA6zB9sHA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
              </iframe>
            </div>
          );
        } 
        else if (titulo == "Attack on Titan") {
            return (
             <div>
                 <iframe src="https://mega.nz/embed/Nv8yWR4C#uYFxDDpQ-0tm1RF-3W2sn67g3bvp2QQHfb5DEZ9qvcM" width="640" height="360" frameborder="0" allowfullscreen>
                 </iframe>
             </div>
             );
         }
         else if (titulo == "Jumanji: Welcome to the Jungle") {
            return (
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/kxsrYBSGm8M?si=NtUocwcCBpqLiDu7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            );
         }
         else if (titulo == "Por mis pistolas") 
         {
            return (
                <iframe width="560" height="500" src="https://www.youtube.com/embed/h9cgTcyKg84?si=2f3GwET4CbjXvKqB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            );
         }
         else if (titulo == "The Simpsons")
         {
            return (
                <iframe width="560" height="315" src="https://www.youtube.com/embed/KhJ0lEbKq00?si=yxPnOiVpSulSFIxO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            );
         }
        else {
          <p>Pelicula no disponible</p>
        }
      };

    return (
        <div className="text-light d-flex justify-content-center row">
            <div className="text-center fs-4 fw-bolder p-0 text-uppercase">
                <p className="text-center text-info m-3">{movie.Title}</p>
            </div>
            <div className="d-flex justify-content-center">
                <div className="justify-content-center col-md-2 m-5 row">
                    <img src={movie.Poster} alt={movie.Title} className="card-img-top" width="100"/>
                    <p className="text-center">  Año: {movie.Year}</p>
                </div>
                <div className="justify-content-center col-md-2 m-5 row">
                    <p>  Pais: {movie.Country}</p>
                    <p>  Sinopsis: {movie.Plot}</p>
                    <p> </p>
                </div>
            </div>
            <div className="text-center mb-3">
                {trailers(movie.Title)}
            </div>
        </div>
    )
}

export default Detail;
