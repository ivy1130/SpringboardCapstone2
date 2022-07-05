"use strict";

/** Routes for companies. */

const jsonschema = require("jsonschema");
const express = require("express");

const { BadRequestError } = require("../expressError");
// const { ensureAdmin } = require("../middleware/auth");
const City = require("../models/city");

const citySearchSchema = require("../schemas/citySearch.json")

const router = new express.Router();

// for each city in the sources list, call the weather api, take the data from that and insert it into the database based on id

// list all cities, filter cities based on season and temperature

router.get("/", async function (req, res, next) {
  const q = req.query;
  // arrive as strings from querystring, but we want as ints
  if (q.minTemp !== undefined) q.minTemp = +q.minTemp;
  if (q.maxTemp !== undefined) q.maxTemp = +q.maxTemp;

  try {
    const validator = jsonschema.validate(q, citySearchSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }

    const cities = await City.findAll(q);
    return res.json({ cities });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;