import axios from "axios";

const APIAuthenticated = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `${localStorage.getItem("token")}`,
  },
});

const API = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-Type": "application/json",
    " Accept": "application/json",
  },
});
export { APIAuthenticated, API };
