import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import App from "./App";
import store from "./app/store"; //import store
import "antd/dist/antd.css"; // apply ant design 

ReactDOM.render(
  //every component inside of the app will have access to store variables!
  <Router>
    
    <Provider store={store}> 
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
); 