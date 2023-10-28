import React from "react";
import { Fragment } from "react";
import "./index.css";


// using flat arrow function
const Card = (props)=> {
  console.log(props);
  return (
    <Fragment>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="" className="card_image" />
          <div className="card_info">
            <p className="card_category">{props.title}</p>
            <h3 className="card_name">{props.sname}</h3>
            <a href={props.link} target="_blan">
              <button>Watch Movie</button>{" "}
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Card;
