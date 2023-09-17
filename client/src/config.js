// config.js
const API_BASE_URLS = {
  production: "https://connectify-server-65oz.onrender.com/",
  development: "http://localhost:3002",
};

const baseUrl =
  process.env.NODE_ENV === "production"
    ? API_BASE_URLS.production
    : API_BASE_URLS.development;

export { baseUrl, API_BASE_URLS };
