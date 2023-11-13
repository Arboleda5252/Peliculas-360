import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer/ayuda.css";

const Home = () => {

  return (
    <>
      <h4 className="text-center text-light">
         Películas - Tendencias de la semana
      </h4>
      <div className="row pt-1 d-flex justify-content-center">
        <div className="col-md-4 my-3" style={{ width: '12rem' }}>
          <Link to="/detail/Tenet" className="link-underline link-underline-opacity-0">
            <div className="card animated fadeInUp ">
              <img src="https://m.media-amazon.com/images/M/MV5BMzU3YWYwNTQtZTdiMC00NjY5LTlmMTMtZDFlYTEyODBjMTk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg" alt="tenet" className="card-img-top zoom-on-hover" width="100" />
              <div className="card-body ">
                <p className="text-center fs-5 fw-bold">Tenet</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-4 my-3" style={{ width: '12rem' }}>
          <Link to="/detail/Dune" className="link-underline link-underline-opacity-0">
            <div className="card animated fadeInUp ">
              <img src="https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg" alt="dune" className="card-img-top zoom-on-hover" width="100" />
              <div className="card-body ">
                <p className="text-center fs-5 fw-bold">Dune</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-4 my-3" style={{ width: '12rem' }}>
          <Link to="/detail/Oppenheimer" className="link-underline link-underline-opacity-0">
            <div className="card animated fadeInUp ">
              <img src="https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg" alt="oppenheimer" className="card-img-top zoom-on-hover" />
              <div className="card-body ">
                <p className="text-center fs-5 fw-bold">Openheimer</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-4 my-3" style={{ width: '12rem' }}>
          <Link to="/detail/Spider-Man: Across the Spider-Verse" className="link-underline link-underline-opacity-0">
            <div className="card animated fadeInUp ">
              <img src="https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg" alt="spiderman" className="card-img-top zoom-on-hover" />
              <div className="card-body ">
                <p className="text-center fs-6 fw-bold">Spider-Man: Across the Spider-Verse</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-4 my-3" style={{ width: '12rem' }}>
          <Link to="/detail/Joker" className="link-underline link-underline-opacity-0">
            <div className="card animated fadeInUp ">
              <img src="https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg" alt="joker" className="card-img-top zoom-on-hover" />
              <div className="card-body ">
                <p className="text-center fs-5 fw-bold">Joker</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-4 my-3" style={{ width: '12rem' }}>
          <Link to="/detail/The Nun II" className="link-underline link-underline-opacity-0">
            <div className="card animated fadeInUp ">
              <img src="https://m.media-amazon.com/images/M/MV5BNmE5MmM2ZGEtNTVlNC00M2Q3LTliMjMtMzg5YjUyMjliZWIzXkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_SX300.jpg" alt="the nun 2" className="card-img-top zoom-on-hover" />
              <div className="card-body ">
                <p className="text-center fs-5 fw-bold">The Nun 2</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <h4 className="text-center text-light mt-4">
         Series - Tendencias de la semana
      </h4>
      <div className="row pt-1 d-flex justify-content-center">
        <div className="col-md-4 my-3" style={{ width: '12rem' }}>
          <Link to="/detail/Loki" className="link-underline link-underline-opacity-0">
            <div className="card animated fadeInUp ">
              <img src="https://m.media-amazon.com/images/M/MV5BYTY0YTgwZjUtYzJiNy00ZDQ2LWFlZmItZThhMjExMjI5YWQ2XkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_SX300.jpg" alt="tenet" className="card-img-top zoom-on-hover" width="100" />
              <div className="card-body ">
                <p className="text-center fs-5 fw-bold">Loki</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-4 my-3" style={{ width: '12rem' }}>
          <Link to="/detail/Attack on Titan" className="link-underline link-underline-opacity-0">
            <div className="card animated fadeInUp ">
              <img src="https://m.media-amazon.com/images/M/MV5BNDFjYTIxMjctYTQ2ZC00OGQ4LWE3OGYtNDdiMzNiNDZlMDAwXkEyXkFqcGdeQXVyNzI3NjY3NjQ@._V1_SX300.jpg" alt="dune" className="card-img-top zoom-on-hover" width="100" />
              <div className="card-body ">
                <p className="text-center fs-5 fw-bold">Attack on Titan</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-4 my-3" style={{ width: '12rem' }}>
          <Link to="/detail/Game of Thrones" className="link-underline link-underline-opacity-0">
            <div className="card animated fadeInUp ">
              <img src="https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg" alt="oppenheimer" className="card-img-top zoom-on-hover" />
              <div className="card-body ">
                <p className="text-center fs-5 fw-bold">Game of Thrones</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-4 my-3" style={{ width: '12rem' }}>
          <Link to="/detail/The Boys" className="link-underline link-underline-opacity-0">
            <div className="card animated fadeInUp ">
              <img src="https://m.media-amazon.com/images/M/MV5BOTEyNDJhMDAtY2U5ZS00OTMzLTkwODktMjU3MjFkZWVlMGYyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg" alt="spiderman" className="card-img-top zoom-on-hover" />
              <div className="card-body ">
                <p className="text-center fs-5 fw-bold">The Boys</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-4 my-3" style={{ width: '12rem' }}>
          <Link to="/detail/The Simpsons" className="link-underline link-underline-opacity-0">
            <div className="card animated fadeInUp ">
              <img src="https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg" alt="joker" className="card-img-top zoom-on-hover" />
              <div className="card-body ">
                <p className="text-center fs-5 fw-bold">The Simpsons</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-4 my-3" style={{ width: '12rem' }}>
          <Link to="/detail/The Last of Us" className="link-underline link-underline-opacity-0">
            <div className="card animated fadeInUp ">
              <img src="https://m.media-amazon.com/images/M/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_SX300.jpg" alt="the nun 2" className="card-img-top zoom-on-hover" />
              <div className="card-body ">
                <p className="text-center fs-5 fw-bold">The Last of Us</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

    </>
  );
};

export default Home;
