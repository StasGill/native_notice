import { AUTH, SET_ERROR } from "../constants/constants";
import * as api from "../api/api";

export const signin = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });
  } catch (error) {
    // dispatch({ type: SET_ERROR, error: error.response.data.message });
    console.log(error);
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
