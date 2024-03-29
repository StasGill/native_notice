import axios from "axios";
import { getValueFor } from "../helpers/localStorage";

//const url = "http://localhost:5000/";

const url = "https://notice-a.herokuapp.com/";

const API = axios.create({ baseURL: url });

API.interceptors.request.use(async (req) => {
  const data = await getValueFor("auth");
  if (data) {
    req.headers.Authorization = `Bearer ${JSON.parse(data)?.token}`;
  }

  return req;
});

//  ============================= Auth API =================

export const signIn = (formData) => {
  return API.post("/user/signin", formData);
};

export const signUp = (formData) => {
  return API.post("/user/signup", formData);
};

//  ============================= List CRUD API =================

export const addList = (formData) => {
  return API.post("/list", formData);
};

export const addShareList = (shareId) => {
  return API.post("/list/share", shareId);
};

export const updateList = (formData) => {
  return API.patch("/list", formData);
};

export const deleteList = (formData) => {
  return API.delete(`/list/${formData.id}`, formData);
};

export const getList = () => {
  return API.get("/list");
};

//  ============================= TASK CRUD API =================

export const addTask = (formData) => {
  return API.post("/task", formData);
};

export const updateTask = (id, updatedTask) => {
  return API.patch(`/task/${id}`, updatedTask);
};

export const deleteTask = (id) => {
  return API.delete(`/task/${id}`);
};

export const getTasks = () => {
  return API.get("/task");
};
