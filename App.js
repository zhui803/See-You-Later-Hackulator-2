import * as React from "react";
import MainContainer from "./navigation/MainContainer";
import store from "./components/redux/store/index";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
}

export default App;
