const DEFAULT_FRONT_URL = "http://localhost:5173";
export const FRONT_URL = window._env_.FRONT_URL || process.env.REACT_APP_FRONT_URL || DEFAULT_FRONT_URL;