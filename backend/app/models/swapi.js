const axios = require("axios");

const swapi = axios.create({
  baseURL: "https://swapi.dev/api/",
  timeout: 30000,
});

const ApiSwSearchPeople = async (name) => {
  try {
    const response = await swapi.get(`people/?search=${name}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const ApiSwGetPerson = async (id) => {
  try {
    const response = await swapi.get(`people/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const ApiSwSearchFilms = async (title) => {
  try {
    const response = await swapi.get(`films/?search=${title}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const ApiSwGetFilm = async (id) => {
  try {
    const response = await swapi.get(`films/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  ApiSwSearchPeople,
  ApiSwGetPerson,
  ApiSwSearchFilms,
  ApiSwGetFilm,
};
