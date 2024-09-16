const express = require("express");
const Joi = require("joi");

const { searchFilms, getFilm } = require("../controllers/films");

const router = express.Router();

router.get("/search", async (req, res) => {
  const validation = Joi.object({
    name: Joi.string().min(1).required(),
  }).validate(req.query);

  if (validation.error) return res.status(400).send(validation.error.message);

  const { name } = validation.value;

  const data = await searchFilms(name);

  res.send(data);
});

router.get("/:id", async (req, res) => {
  const validation = Joi.object({
    id: Joi.number().min(1).required(),
  }).validate(req.params);

  if (validation.error) return res.status(400).send(validation.error.message);

  const { id } = validation.value;

  const data = await getFilm(id);

  res.send(data);
});

module.exports = router;
