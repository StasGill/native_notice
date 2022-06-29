import React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import MainScreen from "./screens/MainScreen";
import reducers from "./reducers";
import { NavigationContainer } from "@react-navigation/native";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <MainScreen />
      </Provider>
    </NavigationContainer>
  );
}

export default App;
