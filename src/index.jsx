import React from "react";
import ReactDOM from "react-dom";
import { Fragment } from "react";
import Card from "./Card";
import './index.css';
import Heading from "./Heading";

ReactDOM.render(
  <Fragment>
  <Heading/>
    <Card
      imgsrc="https://wallpaperaccess.com/full/1605503.jpg"
      title="Netflix Original"
      sname="Dark"
      link="https://www.netflix.com/in/title/80100172"
    />
    <Card
      imgsrc="https://wallpapercave.com/uwp/uwp3687626.jpeg"
      title="Netflix Original"
      sname="Stranger Things "
      link="https://www.netflix.com/in/title/80100172" />

    <Card
      imgsrc="https://wallpapercave.com/dwp1x/wp6063868.jpg"
      title="Netflix Original"
      sname="Harry Potter"
      link="https://www.netflix.com/in/title/80100172" />

    <Card imgsrc="https://wallpapercave.com/dwp1x/wp1864240.jpg"
      title="Netflix Original"
      sname="Life OF Pie"
      link="https://www.netflix.com/in/title/80100172" />

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
