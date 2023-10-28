import React from "react";
import Card from "./Card";


// using flat arrow function
const Netflixcard = (val) =>
  <Card
    key = {val.id}
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}
  />

export default Netflixcard;
