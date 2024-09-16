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

  return data;
};

module.exports = {
  searchPeople,
  getPerson,
};
