import axios from "axios";

const APIAuthenticated = axios.create({
  baseURL: "https://ecommerce-backend-9epn.onrender.com/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `${localStorage.getItem("token")}`,
  },
});

const API = axios.create({
  baseURL: "https://ecommerce-backend-9epn.onrender.com/",
  headers: {
    "Content-Type": "application/json",
    " Accept": "application/json",
  },
});
export { APIAuthenticated, API };
