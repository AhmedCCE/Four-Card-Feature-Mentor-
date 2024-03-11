import React from "react";
import "./App.css";
import Card from "./Components/Card";
import Eye from "./Icons/Eye";
import House from "./Icons/House";
import Lamp from "./Icons/Lamp";
import Calc from "./Icons/Calc";
const App = () => {
  return (
    <div>
      <div className="txt">
        <h2 className="h2">Reliable, efficient delivery</h2>
        <h2 className="h2" style={{ fontWeight: 600, marginBottom: "15px" }}>
          Powered by Technology
        </h2>
        <p className="paragraph">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>
      <div className="cards">
        <Card
          title="Supervisor"
          body="Monitors activity to identify project roadblocks"
          element={<Eye />}
          color="var(--cyan)"
        />
        <div className="column">
          <Card
            title="Team Builder"
            body="Scans our talent network to create the optimal team for your project"
            element={<House />}
            color="var(--red)"
          />
          <Card
            title="Karma"
            body="Regularly evaluates our talent to ensure quality"
            element={<Lamp />}
            color="var(--orange)"
          />
        </div>
        <Card
          title="Calculator"
          body="Uses data from past projects to provide better delivery estimates"
          element={<Calc />}
          color="var(--blue)"
        />
      </div>

      <div className="cardss">
        <Card
          title="Supervisor"
          body="Monitors activity to identify project roadblocks"
          element={<Eye />}
          color="var(--cyan)"
        />
        <Card
          title="Team Builder"
          body="Scans our talent network to create the optimal team for your project"
          element={<House />}
          color="var(--red)"
        />
        <Card
          title="Karma"
          body="Regularly evaluates our talent to ensure quality"
          element={<Lamp />}
          color="var(--orange)"
        />
        <Card
          title="Calculator"
          body="Uses data from past projects to provide better delivery estimates"
          element={<Calc />}
          color="var(--blue)"
        />
      </div>
    </div>
  );
};
export default App;
