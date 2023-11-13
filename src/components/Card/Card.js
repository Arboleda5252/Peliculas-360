import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../Footer/ayuda.css";

const Card = ({ movie }) => (
  <div className="col-md-4 my-3" style={{ width: '15rem' }}>
    <Link to={`/detail/${movie.Title}`} className="link-underline link-underline-opacity-0 ">
      <div className="card animated fadeInUp ">
        <img
          src={
            movie.Poster === "N/A"
              ? "https://i.imgur.com/PHZVZvp.png"
              : movie.Poster
          }
          alt={movie.Title}
          className="card-img-top zoom-on-hover"
          width="100"
        />
        <div className="card-body " style={{ height: 'auto' }}>
          <p className="text-center fs-5 fw-bold">{`${movie.Title} (${movie.Year})`}</p>
          <p className="text-center">{`Type: ${movie.Type}`}</p>
        </div>
      </div>
    </Link>
  </div>
);

Card.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string,
    Title: PropTypes.string,
    Year: PropTypes.string,
    Poster: PropTypes.string,
    Type: PropTypes.string,
  }).isRequired,
};

export default Card;
