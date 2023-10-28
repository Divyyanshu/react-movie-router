import React from "react"
import Card from "./Card";

function Netflixcard(val) {
    return (
      <Card
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}
      />
    )
  }

  export default Netflixcard;