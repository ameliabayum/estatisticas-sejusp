import axios from "axios";

const NODE_ENV = process.env.NODE_ENV || "development";

const URL_API = NODE_ENV === "production" ? "" : "http://localhost:3003";

export const instance = axios.create({
  baseURL: URL_API,
});
