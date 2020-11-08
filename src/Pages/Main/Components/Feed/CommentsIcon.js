import React from "react";
import "./Feed.scss";

class CommentsIcon extends React.Component {
  render() {
    const { width, height, view, path } = this.props;
    return (
      <button className="comments-btn">
        <svg style={{ width: width, height: height }} viewBox={view}>
          <path d={path}></path>
        </svg>
      </button>
    );
  }
}
export default CommentsIcon;
