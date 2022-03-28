import ReactDOM from "react-dom";
import { render } from "react-dom";
import App from "./App";
import { createStore } from "redux";
import allreducers from "./redux";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MediaCard from "./compoents/Aboutme/Index";
const rootElement = document.getElementById("root");
const store = createStore(
  allreducers,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);

render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/me" element={<MediaCard/>}/>
      </Routes>
    </Provider>
  </BrowserRouter>,

  rootElement
);
