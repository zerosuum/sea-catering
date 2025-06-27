import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Menu from "./Components/Menu/Menu";
import Title from "./Components/Title/Title";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title
          subTitle='Our Top Picks'
          title='Healthy Eating Made Easy & Delicious'
        />
        <Menu />
      </div>
    </div>
  );
};
export default App