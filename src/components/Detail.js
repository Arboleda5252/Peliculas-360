import React, { useState } from "react";
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
		else if (titulo == "Por mis pistolas") {
			return (
				<iframe width="560" height="500" src="https://www.youtube.com/embed/h9cgTcyKg84?si=2f3GwET4CbjXvKqB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			);
		}
		else if (titulo == "The Simpsons") {
			return (
				<iframe width="560" height="315" src="https://www.youtube.com/embed/KhJ0lEbKq00?si=yxPnOiVpSulSFIxO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			);
		}
		else {
			<p>Pelicula no disponible</p>
		}
	};

	const calificacion = (rating) => {
		if (rating != "N/A") {
			let floatValue = parseFloat(rating);
			let percent = floatValue * 10;
			if (floatValue >= 8.5) {
				return (
					<div className="progress mb-2" role="progressbar" aria-label="Info example" aria-valuenow="5" aria-valuemin="0" aria-valuemax="10">
						<div className="progress-bar bg-success bg-gradient text-dark" style={{ width: `${percent}%` }}>{rating}</div>
					</div>
				);
			}
			else if (floatValue >= 5.5 && floatValue < 8.5) {
				return (
					<div className="progress mb-2" role="progressbar" aria-label="Info example" aria-valuenow="5" aria-valuemin="0" aria-valuemax="10">
						<div className="progress-bar bg-primary bg-gradient text-dark" style={{ width: `${percent}%` }}>{rating}</div>
					</div>
				);
			}
			else if (floatValue >= 3 && floatValue < 5.5) {
				return (
					<div className="progress mb-2" role="progressbar" aria-label="Info example" aria-valuenow="5" aria-valuemin="0" aria-valuemax="10">
						<div className="progress-bar bg-warning bg-gradient text-dark" style={{ width: `${percent}%` }}>{rating}</div>
					</div>
				);
			}
			else if (floatValue < 3) {
				return (
					<div className="progress mb-2" role="progressbar" aria-label="Info example" aria-valuenow="5" aria-valuemin="0" aria-valuemax="10">
						<div className="progress-bar bg-danger bg-gradient text-dark" style={{ width: `${percent}%` }}>{rating}</div>
					</div>
				);
			}
		}
		else {
			return (
				<div className="progress mb-2" role="progressbar" aria-label="Info example" aria-valuenow="5" aria-valuemin="0" aria-valuemax="10">
					<div className="progress-bar bg-secondary bg-gradient text-dark" style={{ width: `0%` }}>N/A</div>
				</div>
			);
		}
	}

	return (
		<div className="d-flex row text-center justify-content-center">
			<div className="m-3 card mb-3 bg-dark" style={{ maxWidth: '900px' }} >
				<div className="row g-0">
					<div className="col-md-4 text-light">
						<img src={ movie.Poster === "N/A"? "https://i.imgur.com/PHZVZvp.png" : movie.Poster} className="img-fluid rounded-start mx-0 my-3" alt={movie.Title} />
						<p className="text-center my-2"> Año: {movie.Year}</p>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h4 className="card-title text-info">{movie.Title}</h4>
							<div className="d-flex text-light">
								<p>{movie.Runtime}</p>
								<p className="mx-3">|</p>
								<p>{movie.Country}</p>
								{movie.Type === "series" ? 
								<div className="d-flex">
									<p className="mx-3">|</p>
									<p className="ms-3">Temporadas: {movie.totalSeasons}</p>
								</div> : null}
							</div>
							{calificacion(movie.imdbRating)}
							<p className="card-text text-light text-start">{movie.Plot}</p>
							<div className="card-text text-light text-start">
								<p>Genero: {movie.Genre}</p>
								<p>Director: {movie.Director}</p>
								<p>Actores: {movie.Actors}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="text-center mb-3">
				{trailers(movie.Title)}
			</div>
		</div>
	)
}

export default Detail;
