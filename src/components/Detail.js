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
                </div>
            </div>
        </div>
    )
}

export default Detail;
