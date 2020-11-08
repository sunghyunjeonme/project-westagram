import React from "react";
import "./Story.scss";
import { STORY } from "./storyData";

class Story extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.setState({ data: STORY });
  }
  render() {
    console.log(this.state.data.name);
    const { data } = this.state;
    return (
      <>
        <div className="stories">
          <ul className="stories-list">
            {data.map((story) => (
              <li>
                <div className="img-wrapper">
                  <div className="border-color">
                    <img className="img" src={story.src} alt="" />
                  </div>
                </div>
                <span>{story.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Story;
