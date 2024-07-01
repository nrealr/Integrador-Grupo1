const DEFAULT_API = "http://localhost:8081";
export const SERVER_API = window._env_.REACT_APP_API_ENDPOINT || process.env.REACT_APP_API_ENDPOINT || DEFAULT_API;