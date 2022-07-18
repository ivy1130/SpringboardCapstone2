import React, { useEffect, useState } from "react";
import TripPlannerApi from "./api";

const SearchForm = ({ setStates, setCities, formData, setFormData }) => {
  useEffect(() => {
    setCities([])
    const getStates = async () => {
      let res = await TripPlannerApi.getCities(formData)
      setStates(res.cities)
    }
    getStates()
  }, [formData])

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((formData) => ({
    ...formData, [id]: value
    }))
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const filterCities = async () => {
  //     let res = await TripPlannerApi.getCities(formData)
  //     console.log(res)
  //   }
  //   filterCities()
  // }

  return (
    <form //onSubmit={handleSubmit}
    >
      <label htmlFor="season">
          Season of travel:
          <select id="season" value={formData.season} onChange={handleChange}>
            <option value="">--Select--</option>
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
            <option value="fall">Fall</option>
            <option value="winter">Winter</option>
          </select>
        </label>
      <label htmlFor="temperature">
          Desired temperature:
          <select id="temperature" value={formData.temperature} onChange={handleChange}>
            <option value="">--Select--</option>
            <option value="cool">Cool</option>
            <option value="mild">Mild</option>
            <option value="warm">Warm</option>
            <option value="hot">Hot</option>
          </select>
        </label>
    </form>
  )
}

export default SearchForm