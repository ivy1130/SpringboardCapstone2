"use strict";

const db = require("../db");
// const { getMonthlyAvg } = require("../helpers/sql")

class City {
  static async insertTemps(id, temps) {
    const querySql = `UPDATE cities
                      SET spring=$1,
                      summer=$2,
                      fall=$3,
                      winter=$4
                      WHERE id=$5`
    
    await db.query(querySql, [...temps, id])
  }

  static async findAll(searchFilters = {}) {
    let query = `SELECT state_name, count(*) 
                  FROM cities 
                  GROUP BY state_name`;

    const { season, minTemp, maxTemp } = searchFilters;

    if ((season !== undefined) && (minTemp !== undefined) && (maxTemp !== undefined)) {
      query =`SELECT state_name, count(*) 
                FROM cities 
                WHERE ${season} BETWEEN ${minTemp} AND ${maxTemp}
                GROUP BY state_name`;
    }    

    query += " ORDER BY state_name";

    const citiesRes = await db.query(query)
    return citiesRes.rows
  }
}

module.exports = City