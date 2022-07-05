"use strict";

/** Routes for companies. */

const axios = require("axios")

// const jsonschema = require("jsonschema");
const cities = require("./cities")
const dates = require("./dates")

// const { BadRequestError } = require("../expressError");
// const { ensureAdmin } = require("../middleware/auth");
const City = require("../models/city");

// for each city in the sources list, call the weather api, take the data from that and insert it into the database based on id

// for (let city of cities) {
//     let data = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/2021-01-01/2021-12-31?unitGroup=us&elements=datetime%2Ctemp&include=days&key=BLBXZ5BJH3J4MZTKZJM4UPDNB&contentType=json`)
//     await City.insertTemps(cities.indexOf(city), data)
// }

const getCityTemps = async (cities, dates) => {
  for (let city of cities.slice(214)) {
    let data = []
    for (let date of dates) {
      let res = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${date}/${date}?unitGroup=us&elements=datetime%2Ctemp&include=days&key=BLBXZ5BJH3J4MZTKZJM4UPDNB&contentType=json`)
      console.log(res.data)
      data.push(Math.round(res.data.days[0].temp))
    }
    await City.insertTemps(cities.indexOf(city)+1, data)
  }
}
// getCityTemps(cities, dates)