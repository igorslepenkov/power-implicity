import { Navbar } from "../Navbar/Navbar";
import { Slider } from "../Slider/Slider";
import "./styles.scss";

export const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Slider />
    </div>
  );
};
