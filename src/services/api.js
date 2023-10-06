import axios from "axios";
import { API_KEY } from "../config/constants";

class Api {
  constructor() {
    this.instance = axios.create({
      baseURL: "https://api.openweathermap.org/",
    });
  }

  async get(endpoint, params) {
    try {
      const response = await this.instance.get(endpoint, {
        params: { appid: API_KEY, ...params },
      });
      return {
        code: true,
        data: response.data,
      };
    } catch (error) {
      return {
        code: false,
        message: error.response.data.message,
      };
    }
  }
}

const API = new Api();
export default API;
