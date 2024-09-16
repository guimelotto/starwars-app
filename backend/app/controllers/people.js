const { ApiSwSearchPeople, ApiSwGetPerson } = require("../models/swapi.js");

const searchPeople = async (title) => {
  const data = await ApiSwSearchPeople(title);
  const mapped = data.results.map((person) => {
    return {
      name: person.name,
      id: person.url.split("/").slice(-2)[0],
      type: "person",
    };
  });

  return mapped;
};

const getPerson = async (id) => {
  const data = await ApiSwGetPerson(id);

  const mapped = {
    name: data.name,
    birth_year: data.birth_year,
    gender: data.gender,
    eye_color: data.eye_color,
    hair_color: data.hair_color,
    height: data.height,
    mass: data.mass,
  };

  return mapped;
};

module.exports = {
  searchPeople,
  getPerson,
};
