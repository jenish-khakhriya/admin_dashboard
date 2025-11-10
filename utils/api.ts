
import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;



//get
export const apiGet = async ( config?: AxiosRequestConfig,endpoint: string = "") => {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`, config);
    return response.data;
  } catch (error: any) {
    console.error("GET API Error:", error.response || error.message);
    throw error;
  }
};

//post
export const apiPost = async ( data?: any, config?: AxiosRequestConfig,endpoint: string = "") => {
  try {
    const response = await axios.post(`${BASE_URL}${endpoint}`, data, config);
    return response.data;
  } catch (error: any) {
    console.error("POST API Error:", error.response || error.message);
    throw error;
  }
};

//put
export const apiPut = async (endpoint: string, data?: any, config?: AxiosRequestConfig) => {
  try {
    const response = await axios.put(`${BASE_URL}${endpoint}`, data, config);
    return response.data;
  } catch (error: any) {
    console.error("PUT API Error:", error.response || error.message);
    throw error;
  }
};

// del
export const apiDelete = async (endpoint: string, config?: AxiosRequestConfig) => {
  try {
    const response = await axios.delete(`${BASE_URL}${endpoint}`, config);
    return response.data;
  } catch (error: any) {
    console.error("DELETE API Error:", error.response || error.message);
    throw error;
  }
};
