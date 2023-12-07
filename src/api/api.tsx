import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL;
const token = process.env.REACT_APP_API_TOKEN_BEARER;
const config = { headers: { Authorization: `Bearer ${token}` } };

export const ApiGetTaskCutting = async (params: string) => {
  const endpoint = process.env.REACT_APP_GETTASKCUTTING_ENDPOINT;
  const API = `${baseURL}${endpoint}`;
  try {
    const response = await axios.get(API, {
      ...config,
      params: { JobProductionNo: params },
    });
    return response.data;
  } catch (error) {
    console.log("Error");
    throw error;
  }
};
