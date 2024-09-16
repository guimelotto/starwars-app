const express = require("express");
const Joi = require("joi");

const { searchPeople, getPerson } = require("../controllers/people");

const router = express.Router();

router.get("/search", async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(1).required(),
  });

  const { value, error } = schema.validate(req.query);

  if (error) return res.status(400).send(error.details[0].message);

  const data = await searchPeople(value.name);

  res.send(data);
});

router.get("/:id", async (req, res) => {
  const schema = Joi.object({
    id: Joi.number().integer().min(1).max(999).required(),
  });

  const { value, error } = schema.validate(req.params);

  if (error) return res.status(400).send(error.details[0].message);

  const data = await getPerson(value.id);

  res.send(data);
});

module.exports = router;
