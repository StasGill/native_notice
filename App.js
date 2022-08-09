import React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import reducers from "./store/reducers";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./stack/MainStack";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <MainStack />
      </Provider>
    </NavigationContainer>
  );
}

export default App;
