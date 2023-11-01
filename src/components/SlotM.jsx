import React from "react";
import { Fragment } from "react";
import '../index.css';

const SlotM = (props) => {
  // let x = "🙂";
  // let y = "🙂";
  // let z = "🙂";

  // let x = props.x;
  // let y = props.y;
  // let z = props.z;
  let {x,y,z} = props;

  if (x === y && y === z) {
    return (
      <Fragment>
        <div className="Slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h3>THIS IS MATCHING Guy'S .</h3>
          <hr/>
        </div>
      </Fragment>
    );
  }else{
    return (
        <Fragment>
          <div className="slot_inner">
            <h1>
              {x} {y} {z}
            </h1>
            <h3>THIS IS Not MATCHING Guy'S</h3>
            <hr/>
            </div>
        </Fragment>
      );
  }
};
export default SlotM;