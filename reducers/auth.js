import { AUTH, LOGOUT, SET_ERROR } from "../constants/constants";
import { save } from "../helpers/localStorage";

const authReducer = (state = { authData: null, error: "" }, action) => {
  switch (action.type) {
    case AUTH:
      // save("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case LOGOUT:
      save("profile", "");
      return { authData: null };
    case SET_ERROR:
      return { ...state, error: action?.error };
    default:
      return state;
  }
};

export default authReducer;
