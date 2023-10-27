import React from "react";
import ReactDOM from "react-dom";
import { Fragment } from "react";
import Card from "./Card";
import './index.css';
import Heading from "./Heading";
import Sdata from "./Sdata";

ReactDOM.render(
  <Fragment>
  <Heading/>
    <Card
      imgsrc={Sdata[0].imgsrc}
      title={Sdata[0].title}
      sname={Sdata[0].sname}
      link={Sdata[0].link}
    />
    <Card
      imgsrc={Sdata[1].imgsrc}
      title={Sdata[1].title}
      sname={Sdata[1].sname}
      link={Sdata[1].link}
    />
    <Card
      imgsrc={Sdata[2].imgsrc}
      title={Sdata[2].title}
      sname={Sdata[2].sname}
      link={Sdata[2].link}
    />

    <Card
      imgsrc={Sdata[3].imgsrc}
      title={Sdata[3].title}
      sname={Sdata[3].sname}
      link={Sdata[3].link}
    />

    <Card imgsrc="https://wallpapercave.com/dwp1x/wp11941863.jpg"
      title="Netflix Original"
      sname="Titanic"
      link="https://www.netflix.com/in/title/80100172" />
      <Card
      imgsrc="https://wallpapercave.com/dwp1x/wp12445684.jpg"
      title="Netflix Original"
      sname="Bloddy Daddy"
      link="https://www.netflix.com/in/title/80100172"
    />
    <Card
      imgsrc="https://wallpapercave.com/dwp1x/wp8637980.jpg"
      title="Netflix Original"
      sname="Money Heist "
      link="https://www.netflix.com/in/title/80100172" />

      <Card
      imgsrc="https://wallpapercave.com/wp/wp8872294.jpg"
      title="Netflix Original"
      sname="La La Land"
      link="https://www.netflix.com/in/title/80100172" />
  </Fragment>,

  document.getElementById("root")
);
