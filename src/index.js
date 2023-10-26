import React, { Fragment } from "react";
import ReactDOM  from "react-dom";

ReactDOM.render(
  <Fragment>
   <div className="cards">
   <div className="card">
   <img src="https://wallpaperaccess.com/full/1092351.jpg" alt="my_pic" className="card_img" />
   <span className="card_catergory">A Netflix Original Series</span>
   <h3 className="card_title">LUSIFER 2020</h3>
   <a href="https://www.netflix.com/in/title/80057918"target="_blanck">
   <button>Watch Now</button>
    </a>
   </div>
   </div>
  </Fragment>
  ,document.getElementById('root'));