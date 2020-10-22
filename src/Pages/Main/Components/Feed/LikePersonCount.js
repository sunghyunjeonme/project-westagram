import React from "react";
import "./Feed.scss";

class LikePersonCount extends React.Component {
  constructor() {
    super();
    this.state = {
      hidden: true,
    };
  }
  handlePersonCount = (e) => {
    this.setState({
      hidden: !this.state.hidden,
    });
  };
  render() {
    console.log(this.state);
    return (
      <>
        <span className="cmts-bold" onClick={this.handlePersonCount}>
          &nbsp;여러 명
        </span>
      </>
    );
  }
}
export default LikePersonCount;
