// Ensure this file has access to environment variables,
// typically through import.meta.env for Vite projects.

// Define a base URL from the environment variable
// Provide a fallback for local development
const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_API_URL || "http://localhost:4000/api/v1";

export const USER_API_END_POINT = `${BACKEND_BASE_URL}/user`;
export const JOB_API_END_POINT = `${BACKEND_BASE_URL}/job`;
export const APPLICATION_API_END_POINT = `${BACKEND_BASE_URL}/application`;
export const COMPANY_API_END_POINT = `${BACKEND_BASE_URL}/company`;