import React, { Fragment } from "react";
import SlotM from "./components/SlotM";

const App = () => {
  return (
    <Fragment>
      <h1 className="heading_style">
        Welcome to 👍
        <span style={{ fontWeight: "800", textTransform: "uppercase" }}>
          Slot Machine 🎰 Game
        </span>
        🎰
      </h1>
      <div  className="slotMachine">
      <SlotM x = "👨‍🔬" y = "👨‍🔬" z = "👨‍🔬" />
      <SlotM  x = "👨" y = "👨‍🔬" z = "👨‍🔬"  />
      <SlotM  x = "👨‍🔬" y = "👨‍🔬" z = "👨‍🔬"  />
      <SlotM  x = "👨‍🔬" y = "💸" z = "👨‍🔬"  />
      <SlotM  x = "⚡" y = "👨‍🔬" z = "👨‍🔬"  />
      <SlotM  x = "⚡" y = "⚡" z = "⚡"  />
      </div>
    </Fragment>
  );
};
export default App;
