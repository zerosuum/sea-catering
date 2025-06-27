import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Menu from "./Components/Menu/Menu";
import Title from "./Components/Title/Title";
import Testimonials from "./Components/Testimonials/Testimonials";
import Subscription from "./Components/Subscription/Subcription";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title
          subTitle="Our Top Picks"
          title="Healthy Eating Made Easy & Delicious"
        />
        <Menu />
        <Title
          subTitle="Testimonial and Feedback"
          title="Loved by The Community"
        />
        <Testimonials />
        <Title subTitle="Become a Member" title="Customize Your Subscription" />
        <Subscription />
      </div>
    </div>
  );
};
export default App;
