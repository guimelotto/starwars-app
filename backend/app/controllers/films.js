const { ApiSwSearchFilms, ApiSwGetFilm } = require("../models/swapi.js");

const searchFilms = async (title) => {
  const data = await ApiSwSearchFilms(title);
  const mapped = data.results.map((film) => {
    return {
      name: film.title,
      id: film.url.split("/").slice(-2)[0],
      type: "movie",
    };
  });
  return mapped;
};

const getFilm = async (id) => {
  const data = await ApiSwGetFilm(id);

  const mapped = {
    title: data.title,
    opening_crawl: data.opening_crawl,
  };

  return mapped;
};

module.exports = {
  searchFilms,
  getFilm,
};
