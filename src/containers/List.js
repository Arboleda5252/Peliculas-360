import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import { ImSearch } from "react-icons/im";

const API = process.env.API;

const List = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
    searchTerm: "",
    year: "",
    contentType: "",
    error: "",
  });

  const getMovie = async () => {
    // search
    const res = await fetch(`${API}&s=batman`);
    const resJSON = await res.json();

    if (resJSON) {
      setState({
        data: resJSON.Search,
        loading: false,
        error: "",
      });
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

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
      searchTerm: "",
      year: "",
      contentType: "",
      error: "",
    });
  };

  const { data, loading } = state;

  if (loading) {
    return <div>Loading...</div>;
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
  
  return (
    <>
      <div className="row">
        <div className="col-md-4 offset-md-4 p-4">
          <form onSubmit={handleSubmit} className="d-inline-flex gap-1">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              onChange={(e) => setState({ ...state, searchTerm: e.target.value })}
              value={state.searchTerm}
              autoFocus
              style={{ width: "300px" }}
            />
            <select
              className="form-control"
              onChange={(e) => setState({ ...state, year: e.target.value })}
              value={state.year}
              style={{ width: "150px" }}
            >
              <option value="">Seleccionar año</option>
              {generateYearOptions()}
            </select>
            <select
              className="form-control"
              onChange={(e) => setState({ ...state, contentType: e.target.value })}
              value={state.contentType}
              style={{ width: "150px" }}
            >
              <option value="">Tipo de contenido</option>
              <option value="movie">Película</option>
              <option value="series">Serie</option>
            </select>
            <button class="btn btn-outline-success" type="submit">
              <ImSearch />
            </button>
          </form>
          <p className="text-white">{state.error ? state.error : ""}</p>
        </div>
      </div>
      <div >
        <div className="row pt-2">
          {data.map((movie, i) => (
            <Card movie={movie} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default List;
