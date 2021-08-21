import "./App.css";
import React from "react";
import DropDown from "./pages/DropDown";
import TextInput from "./pages/TextInput";
import DateComponent from "./pages/Date";
import StateComponent from "./pages/StateComponent";
import ParentComponent from "./pages/ParentComponent";
import TestElements from "./pages/TestElements";
import TestRedux from "./pages/TestRedux";
import CounterProvider from "./pages/TextContext";
import { Counter } from "./pages/TextContext";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./pages/store/reducer";

const store = createStore(reducer);

// https://www.freecodecamp.org/news/8-simple-steps-to-start-testing-react-apps-using-react-testing-library-and-jest/#5-testing-react-redux

function App() {
  return (
    // <Router>
    //   <Route exact path="/" component={Self} />
    //   <Route exact path="/work" component={Work} />
    // </Router>
    <>
      {/* <DropDown /> */}
      {/* <TextInput /> */}
      {/* <DateComponent /> */}
      {/* <StateComponent /> */}
      {/* <ParentComponent /> */}
      {/* <TestElements /> */}

      <Provider store={store}>
        <TestRedux />
      </Provider>

      {/* <CounterProvider /> */}
    </>
  );
}

export default App;
