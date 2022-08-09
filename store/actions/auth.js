import {
  AUTH,
  SET_ERROR,
  START_LOADING,
  END_LOADING,
} from "../constants/constants";
import * as api from "../../api/api";
import { save } from "../../helpers/secureStore";

export const signIn = (formData) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.signIn(formData);

    save("auth", JSON.stringify(data));

    dispatch({ type: AUTH, data });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.response.data.error.name);
  }
};

export const signup = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });
  } catch (error) {
    dispatch({ type: SET_ERROR, error: error.response.data.message });
    console.log(error);
  }
};

export const localSignIn = (data) => async (dispatch) => {
  try {
    // const responce = await api.getList();
    // console.log(responce);
    dispatch({ type: AUTH, data });
  } catch (error) {
    console.log(error);
  }
};
