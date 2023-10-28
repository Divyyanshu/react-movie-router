import React from "react";
import ReactDOM from "react-dom";
import { Fragment } from "react";
import './index.css';
import Heading from "./Heading";
import Sdata from "./Sdata";
import Netflixcard from "./Netflixcard";

// dynamic working by using map method arry of the object


ReactDOM.render(
  <Fragment>
    <Heading />
    {Sdata.map(Netflixcard)}
  </Fragment>,

  document.getElementById("root")
);
