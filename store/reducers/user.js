import {
  ADD_DRAWER,
  GET_LISTS,
  START_LOADING,
  EDIT_DRAWER,
  CURRENT_LIST,
  UPDATE_LIST,
  ADD_LIST,
  DELETE_LIST,
  ADD_TASK,
  DELETE_TASK,
  CURRENT_DRAWER,
  SHARE_DRAWER,
  SET_SHARE,
  END_LOADING,
} from "../constants/constants";

const userReducer = (
  state = {
    isLoading: false,
    addDrawer: false,
    editDrawer: false,
    shareDrawer: false,
    currentTaskDrawer: false,
    lists: [],
    currentList: { title: "", color: "", _id: "" },
    currentTasks: {},
    shareId: "",
    currentListId: "",
  },
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case ADD_DRAWER:
      return { ...state, addDrawer: !state.addDrawer };
    case EDIT_DRAWER:
      return {
        ...state,
        editDrawer: !state.editDrawer,
        currentListId: action?.id,
      };
    case CURRENT_DRAWER:
      return { ...state, currentTaskDrawer: !state.currentTaskDrawer };
    case SHARE_DRAWER:
      return { ...state, shareDrawer: !state.shareDrawer };
    case CURRENT_LIST:
      return { ...state, currentList: action?.item };
    case SET_SHARE:
      return { ...state, shareId: action?.shareId };
    case GET_LISTS:
      return {
        ...state,
        lists: action?.data,
        currentList: state.currentList,
      };
    case ADD_LIST:
      return { ...state, lists: action?.data };
    case UPDATE_LIST:
      return {
        ...state,
        lists: action?.data,
        currentList: action?.currentList,
      };
    case DELETE_LIST:
      return { ...state, lists: action?.data };
    case ADD_TASK:
      return {
        ...state,
        lists: action?.data,
        currentList: action?.currentList,
      };
    case DELETE_TASK:
      return {
        ...state,
        lists: action?.data,
        currentList: action?.currentList,
      };

    default:
      return state;
  }
};

export default userReducer;
