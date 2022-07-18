import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class TripPlannerApi {

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}${endpoint}`;
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCities({season="", temperature=""}) {
    let res
    if (season.length>1 && temperature.length>1) {
      let ranges = {cool: [30, 55],
                   mild: [56, 70],
                   warm: [71, 85],
                   hot: [86, 120]}
      let minTemp = ranges[temperature][0]
      let maxTemp = ranges[temperature][1]
      res = await this.request(`/`, {season, minTemp, maxTemp})
    }
    else {
      res = await this.request(`/`)
    }
    return res
  }

  static async getCitiesByState(state, {season="", temperature=""}) {
    let ranges = {cool: [30, 55],
      mild: [56, 70],
      warm: [71, 85],
      hot: [86, 120]}
    let minTemp = ranges[temperature][0]
    let maxTemp = ranges[temperature][1]
    let res = await this.request(`/${state}`, {season, minTemp, maxTemp})
    return res
  }
}

export default TripPlannerApi