import React from "react";
import "./Feed.scss";

class CommentsContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.comments.map((comment) => (
          <div className="comments-regular" key={comment.id}>
            <span className="content-bold ">{comment.userName}</span>
            <span className="content-regular">&nbsp;{comment.content}</span>
            <img
              onClick={() => this.props.onClick(comment.id)}
              className="close-btn"
              src="images/close-button.png"
              alt="close-button"
            />
          </div>
        ))}
      </div>
    );
  }
}
export default CommentsContainer;
