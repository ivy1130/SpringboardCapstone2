import React, { useState, useEffect } from "react"
import SearchForm from "./SearchForm"
import TripPlannerApi from "./api";
// import { get } from "superagent";

const Home = () => {
  const INITIAL_STATE = {
    season: "",
    temperature: ""
  }

  const [formData, setFormData] = useState(INITIAL_STATE)
  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])

  const handleClick = (e) => {
    e.preventDefault()
    setStates([])
    let state = e.target.id
    const getCitiesByState = async () => {
      let res = await TripPlannerApi.getCitiesByState(state, formData)
      console.log(res)
      setCities(res.cities)
    }
    getCitiesByState()
  }


  return (
    <div>
      <h1>Trip Planner</h1>
      <SearchForm setStates={setStates} setCities={setCities} formData={formData} setFormData={setFormData}/>
      <h2>Suggested Cities</h2>
      <ul>
        {states.map(({ state_name, count }) => (
          <li key = {state_name} onClick={handleClick}>
            <a href="" id = {state_name}>{state_name} - {count} cities</a>
          </li>
        ))}
        {(cities.length>0) &&
          cities.map((city) => (
            <li key = {city.city}>
              City: {city.city} - {formData.season}: {city[formData.season]} F
            </li>           
          ))
        }
      </ul>
    </div>
  )
}

export default Home