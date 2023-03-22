export const ServerUrl = "https://64.226.86.142:8000/api";
import axios from "axios";

export const getRequest = async (endPoint) => {
  try {
    const res = await axios.get(ServerUrl + endPoint);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const postRequest = async (endPoint, params) => {
  try {
    const res = await axios.post(ServerUrl + endPoint, params);
    return res.data;
  } catch (err) {
    return err;
  }
};


export const deleteRequest = async (endPoint) => {
  try {
    const res = await axios.delete(ServerUrl + endPoint);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getRequestById = async (endPoint) => {
  try {
    const res = await axios.get(ServerUrl + endPoint);
    return res.data;
  } catch (err) {
    return err;
  }
};


export const putRequest = async (endPoint, params) => {
  try {
    const res = await axios.put(ServerUrl + endPoint, params);
    return res.data;
  } catch (err) {
    return err;
  }
};
