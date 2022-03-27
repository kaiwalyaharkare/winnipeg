import ReactDOM from "react-dom";
import { render } from "react-dom";
import App from "./App";
import { createStore, combineReducers } from "redux";
import allreducers from "./redux";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const rootElement = document.getElementById("root");
const store = createStore(
  allreducers,
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Provider>
  </BrowserRouter>,

  rootElement
);
