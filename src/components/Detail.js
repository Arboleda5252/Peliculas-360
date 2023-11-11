import React, {useState} from "react";
import { useParams } from "react-router-dom";

const API = process.env.API;

const Detail = () => {

    const { id } = useParams();
    console.log(id);

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
        <div>
            <h1>{movie.Title}</h1>
            <p>{movie.Country}</p>
            <p>{movie.Plot}</p>
            <img src={movie.Poster} alt={movie.Title}/>
        </div>
    )
}

export default Detail;
