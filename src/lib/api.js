import dotenv from "dotenv";

dotenv.config();

const { API_URL } = process.env;

export const apiFetch = (url, options) => {
  return fetch(`${API_URL}${url}`, options);
};
