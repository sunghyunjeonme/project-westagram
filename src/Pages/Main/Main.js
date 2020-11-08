import React from "react";
import "./Main.scss";
import Nav from "./Components/Nav/Nav";
import Story from "./Components/Story/Story";
import Feed from "./Components/Feed/Feed";
import SecondFeed from "./Components/Feed/SecondFeed";
import Aside from "./Components/Aside/Aside";

class Main extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div className="viewport-container">
          <section className="main-container">
            <div className="feeds-container">
              <Story />
              <Feed />
              <SecondFeed />
            </div>
            <Aside />
          </section>
        </div>
      </>
    );
  }
}

export default Main;
