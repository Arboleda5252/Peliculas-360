import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from "../components/Card/Card";
import Home from "../components/home";
import { ImSearch } from "react-icons/im";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const API = process.env.API;

const List = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
    searchTerm: "",
    year: "",
    contentType: "",
    error: "",
    totalResults: 0,
    result: "",
    currentPage: 1,
  });

  const { resultado, num } = useParams();

  React.useEffect(() => {
    obtenerPagina();
  }, [num]);

  const obtenerPagina = async () => {
    if (resultado === undefined || num === undefined) {
      return getMovie();
    }
    else {
      const response = await fetch(`${API}&s=${resultado}&page=${num}`);
      const responseData = await response.json();
      setState({
        ...state,
        data: responseData.Search,
        totalResults: parseInt(responseData.totalResults),
        result: `${resultado}`,
        currentPage: parseInt(num),
      });
    }
  };

  const getMovie = async () => {
    // search
    const res = await fetch(`${API}&s=batman&page=1`);
    const resJSON = await res.json();

    if (resJSON) {
      setState({
        data: resJSON.Search,
        loading: false,
        error: "",
        totalResults: parseInt(resJSON.totalResults),
        result: `batman&y`,
        currentPage: 1,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (state.searchTerm === "") {
      return setState({ ...state, error: "Por favor, ingresa un término de búsqueda válido." });
    }

    const { searchTerm, year, contentType } = state;

    const response = await fetch(`${API}&s=${state.searchTerm}&y=${year}&type=${contentType}&page=1`);
    const data = await response.json();

    if (!data.Search) {
      return setState({ ...state, error: "No hay resultados" });
    }

    return setState({
      data: data.Search,
      result: `${searchTerm}&y=${year}&type=${contentType}`,
      searchTerm: "",
      year: "",
      contentType: "",
      error: "",
      totalResults: parseInt(data.totalResults),
      currentPage: 1,
    });
  };

  const { data, loading } = state;

  if (loading) {
    return (
      <div>
        <div className="spinner-border text-primary position-relative top-50 start-50 m-5"
          role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const startYear = 1901;
    const years = [];

    for (let year = currentYear; year >= startYear; year--) {
      years.push(year);
    }

    return years.map((year) => (
      <option key={year} value={year}>
        {year}
      </option>
    ));
  };

  const totalPages = Math.ceil(state.totalResults / 10);

  const range = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => start + i);

  const visiblePages = range(Math.max(state.currentPage - 3, 1), Math.min(state.currentPage + 3, totalPages));

  let palabra = state.result.split('&y')[0];

  const titleResults = () => {
    if (state.result !== "batman&y") {
      return (
        <div className="text-light d-flex row">
          <p className="text-center fs-4 fw-bolder p-0 text-uppercase">Resultados de búsqueda: {palabra}</p>
          <p className="text-end fst-italic px-4">Total de resultados: {state.totalResults}</p>
        </div>
      );
    }
    else {
      return <h4 className="text-center text-light mt-4">Peliculas recomendadas sobre Batman</h4>
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-md-4 offset-md-4 p-4">
          <form onSubmit={handleSubmit} className="d-inline-flex gap-1">
            <input
              type="text"
              className="form-control text-light bg-dark"
              placeholder="Search movie"
              onChange={(e) => setState({ ...state, searchTerm: e.target.value })}
              value={state.searchTerm}
              autoFocus
              style={{ width: "300px" }}
            />
            <select
              className="form-select-sm text-light bg-dark" aria-label="Small select example "
              onChange={(e) => setState({ ...state, year: e.target.value })}
              value={state.year}
              style={{ width: "150px" }}
            >
              <option value="">Seleccionar año</option>
              {generateYearOptions()}
            </select>
            <select
              className="form-select-sm text-light bg-dark" aria-label="Small select example "
              onChange={(e) => setState({ ...state, contentType: e.target.value })}
              value={state.contentType}
              style={{ width: "160px" }}
            >
              <option value="">Tipo de contenido</option>
              <option value="movie">Película</option>
              <option value="series">Serie</option>
            </select>
            <button className="btn btn-outline-success" type="submit">
              <ImSearch />
            </button>
          </form>
          <p className="text-white">{state.error ? state.error : ""}</p>
        </div>
      </div>
      <div>{state.currentPage === 1 && state.result === "batman&y" && <Home />}</div>
      <div>{titleResults()}</div>
      <div >
        <div className="row pt-1 d-flex justify-content-evenly">
          {data.map((movie, i) => (
            <Card movie={movie} key={i} />
          ))}
        </div>
      </div>
      <nav aria-label="Page navigation example" className="my-3">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${state.currentPage === 1 ? 'disabled' : ''}`}>
            <Link to={`/${state.result}/${state.currentPage - 1}`} className="page-link" href="#"><AiOutlineArrowLeft /></Link>
          </li>
          {visiblePages[0] > 1 && (
            <li className="page-item">
              <Link to={`/${state.result}/1`} className="page-link">1</Link>
            </li>
          )}
          {visiblePages[0] > 2 && (
            <li className="page-item disabled">
              <a className="page-link" href="#">...</a>
            </li>
          )}
          {visiblePages.map(page => (
            <li key={page} className={`page-item ${page === state.currentPage ? 'active' : ''}`}>
              <Link to={`/${state.result}/${page}`} className="page-link">{page}</Link>
            </li>
          ))}
          {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
            <li className="page-item disabled">
              <a className="page-link" href="#">...</a>
            </li>
          )}
          {visiblePages[visiblePages.length - 1] < totalPages && (
            <li className="page-item">
              <Link to={`/${state.result}/${totalPages}`} className="page-link">{totalPages}</Link>
            </li>
          )}
          <li className={`page-item ${state.currentPage === totalPages ? 'disabled' : ''}`}>
            <Link to={`/${state.result}/${state.currentPage + 1}`} className="page-link" ><AiOutlineArrowRight /></Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default List;
