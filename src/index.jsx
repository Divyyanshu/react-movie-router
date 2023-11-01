import React, { Fragment } from "react";
import ReactDOM from "react-dom";
// import Heading from "./components/Heading";
// import Netflixcard from "./components/Netflixcard";
// import Sdata from "./components/Sdata";
import './index.css';
import App from "./App";

// dynamic working by using map method arry of the object


ReactDOM.render(
  <Fragment>
  <App/>
  </Fragment>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <Fragment>
//     <Heading />
//     {Sdata.map(Netflixcard)}
//   </Fragment>,
//   document.getElementById("root")
// );
