import axios from "axios";

// const baseUrl = process.env.NEXT_API_URL;
const baseUrl = process.env.NEXT_PUBLIC_API_KEY;

export const api = axios.create({
  baseURL: baseUrl,

})
