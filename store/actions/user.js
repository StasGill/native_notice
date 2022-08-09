import {
  ADD_DRAWER,
  ADD_LIST,
  GET_LISTS,
  EDIT_DRAWER,
  CURRENT_LIST,
  UPDATE_LIST,
  DELETE_LIST,
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  GET_TASKS,
  CURRENT_DRAWER,
  SHARE_DRAWER,
  SET_SHARE,
  SET_ERROR,
  START_LOADING,
  END_LOADING,
} from "../constants/constants";
import * as api from "../../api/api";
import { save } from "../../helpers/secureStore";

//  ========================== Drawer and UI Actions ================

export const addDrawerAction = () => async (dispatch) => {
  dispatch({ type: ADD_DRAWER });
};

export const editDrawerAction = (id) => async (dispatch) => {
  dispatch({ type: EDIT_DRAWER, id });
};

export const currentListDrawerAction = () => async (dispatch) => {
  dispatch({ type: CURRENT_DRAWER });
};

export const shareDrawerAction = () => async (dispatch) => {
  dispatch({ type: SHARE_DRAWER });
};

export const setCurrentList = (item) => async (dispatch) => {
  dispatch({ type: CURRENT_LIST, item });
};

export const setCurrentList2 = (index) => async (dispatch) => {
  dispatch({ type: CURRENT_LIST, index });
};

export const setShareId = (shareId) => async (dispatch) => {
  dispatch({ type: SET_SHARE, shareId });
};

export const addShareList = (shareId, userName) => async (dispatch) => {
  try {
    const { data } = await api.addShareList({ shareId, userName });
    dispatch({ type: SET_SHARE, shareId: "" });
    dispatch({ type: ADD_LIST, data });
  } catch (error) {
    console.log(error);
  }
};

//  ============================= List CRUD Actions =================

export const addList = (formData) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.addList(formData);
    // const lastIndex = data?.length - 1;
    // const item = data[lastIndex];
    // item && navigate(`/?list=${item._id}`);
    dispatch({ type: END_LOADING });

    dispatch({ type: ADD_LIST, data });
    dispatch({ type: CURRENT_LIST, item });
  } catch (error) {
    console.log(error);
  }
};

export const updateList = (formData, currentListId) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.updateList(formData);

    const currentList = data.find((item) => item._id === currentListId);
    dispatch({ type: END_LOADING });
    dispatch({ type: UPDATE_LIST, data, currentList });
  } catch (error) {
    console.log(error);
  }
};

export const deleteList = (formData) => async (dispatch) => {
  try {
    const { data } = await api.deleteList(formData);

    dispatch({ type: DELETE_LIST, data });
  } catch (error) {
    console.log(error);
  }
};

export const getList = (navigate) => async (dispatch) => {
  try {
    const { data } = await api.getList();
    dispatch({ type: GET_LISTS, data });
  } catch (error) {
    save("auth", "");
    dispatch({ type: SET_ERROR, error: error.response.data.message });
    if (error.response.data.error.name === "TokenExpiredError") {
      save("auth", "");
    }
  }
};

//  ============================= Task CRUD Actions =================

export const addTask = (formData, currentListId) => async (dispatch) => {
  try {
    const { data } = await api.addTask(formData);
    const currentList = await data.find((item) => item._id === currentListId);
    dispatch({ type: ADD_TASK, data, currentList });
  } catch (error) {
    console.log(error);
  }
};

export const updateTask =
  (id, currentListId, updatedTask) => async (dispatch) => {
    try {
      const { data } = await api.updateTask(id, updatedTask);

      const currentList = await data.find((item) => item._id === currentListId);

      dispatch({ type: UPDATE_TASK, data, currentList });
    } catch (error) {
      console.log(error);
    }
  };

export const deleteTask = (id, currentListId) => async (dispatch) => {
  try {
    const { data } = await api.deleteTask(id);

    const currentList = data.find((item) => item._id === currentListId);

    dispatch({ type: DELETE_TASK, data, currentList });
  } catch (error) {
    console.log(error);
  }
};

export const getTask = () => async (dispatch) => {
  try {
    const { data } = await api.getTasks();

    dispatch({ type: GET_TASKS, data });
  } catch (error) {
    console.log(error);
  }
};
