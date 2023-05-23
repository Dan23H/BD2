import React from "react";
import { store } from "./store/store";
import { Provider, useDispatch } from "react-redux";
import { login } from "./actions/auth";
import { Routing } from "./routes/UserRoutes";
import { firebase } from "./firebase/firebaseConfig"

const App = () => {
  return (
    <Provider store={store}>
      <Routing/>
    </Provider>
  );
};

export default App;