import React from "react";
import "./SecondFeed.scss";
import CommentsContainer from "./CommentsContainer";
import LikePersonCount from "./LikePersonCount";
import CommentsIcon from "./CommentsIcon";
import CommentsHeartIcon from "./CommentsHeartIcon";
import {
  COMMENTS_LIKE,
  COMMENTS_SHARE,
  COMMENTS_BALLOON,
} from "../../../../config";

class SecondFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
      commentValue: "",
      countPersonHidden: true,
      like_btn_color: true,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data/data.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          commentList: res.data,
        });
      });
  }

  handleCommentValue = (e) => {
    this.setState({
      commentValue: e.target.value,
    });
  };

  handlePressEnter = (e) => {
    if (this.state.commentValue.length !== 0 && e.key === "Enter") {
      this.addComment();
    }
  };

  handleDeleteComment = (id) => {
    const { commentList } = this.state;
    this.setState({
      commentList: commentList.filter((comment) => comment.id !== id),
    });
  };

  handleClickLikeBtn = (e) => {
    this.setState({
      like: !this.state.like,
    });
  };

  handleBtnChange = (e) => {
    this.setState({
      like_btn_color: !this.state.like_btn_color,
    });
  };

  addComment = (e) => {
    const { commentList, commentValue } = this.state;
    this.setState({
      commentList: [
        ...commentList,
        {
          id: commentList.length + 1,
          userName: "hyuns619",
          content: commentValue,
          isLiked: false,
        },
      ],
      commentValue: "",
    });
  };

  render() {
    const { like_btn_color, commentValue } = this.state;
    return (
      <article className="feed">
        <header className="feed-header">
          <div className="posting-user">
            <img
              alt="developerspace님의 프로필 사진"
              className="user-img"
              src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/19624890_2330762680482397_4621146255127478272_a.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=UoCvSOk4wA4AX_GsAGw&amp;oh=f3728cbbef095e89379d6f91c77346f3&amp;oe=5FB884B3"
            />
            <div className="userinfo-wrapper">
              <p className="username">developerspace</p>
              <p className="location">Space</p>
            </div>
            <svg fill="#262626" height="16" viewBox="0 0 48 48" width="16">
              <circle
                clip-rule="evenodd"
                cx="8"
                cy="24"
                fill-rule="evenodd"
                r="4.5"
              ></circle>
              <circle
                clip-rule="evenodd"
                cx="24"
                cy="24"
                fill-rule="evenodd"
                r="4.5"
              ></circle>
              <circle
                clip-rule="evenodd"
                cx="40"
                cy="24"
                fill-rule="evenodd"
                r="4.5"
              ></circle>
            </svg>
          </div>
        </header>
        <div className="feed-img-wrapper">
          <img
            className="Feed-img"
            alt="피드 이미지"
            sizes="614px"
            srcset="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/122198518_190758285900640_2833960380202960865_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=104&amp;_nc_ohc=I1xbuKmra4UAX-RbBl9&amp;_nc_tp=24&amp;oh=24f387cfb951fb98ebe98bd019f808ee&amp;oe=5FB93BE1 640w,https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/122198518_190758285900640_2833960380202960865_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=104&amp;_nc_ohc=I1xbuKmra4UAX-RbBl9&amp;_nc_tp=24&amp;oh=1eb4117a94c85f732dde6e2614c55d04&amp;oe=5FB865A5 750w,https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/122198518_190758285900640_2833960380202960865_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=104&amp;_nc_ohc=I1xbuKmra4UAX-RbBl9&amp;_nc_tp=18&amp;oh=879c09eb95ec2713fd2f4dfd1bb13050&amp;oe=5FB860DB 1080w"
            src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/122198518_190758285900640_2833960380202960865_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=104&amp;_nc_ohc=I1xbuKmra4UAX-RbBl9&amp;_nc_tp=18&amp;oh=879c09eb95ec2713fd2f4dfd1bb13050&amp;oe=5FB860DB"
          />
        </div>
        <div className="comments-icon">
          <div className="icon-wrapper">
            <span className="comments-btn-wrapper">
              <CommentsHeartIcon
                width="24px"
                height="24px"
                view="0 0 48 48"
                path={COMMENTS_LIKE}
                onClick={this.handleBtnChange}
                status={this.state.like_btn_color}
              />
            </span>
            <span className="comments-btn-wrapper">
              <CommentsIcon
                width="24px"
                height="24px"
                view="0 0 48 48"
                path={COMMENTS_BALLOON}
              />
            </span>
            <span className="comments-btn-wrapper">
              <CommentsIcon
                width="24px"
                height="24px"
                view="0 0 48 48"
                path={COMMENTS_SHARE}
              />
            </span>
            <span className="icon-flag-wrapper">
              <button className="button-flag">
                <svg viewBox="0 0 48 48" width="24">
                  <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                </svg>
              </button>
            </span>
          </div>
        </div>
        <div className="comments-count">
          <p className="cmts-bold">coding_.master</p>
          <span className="cmts-regular">님</span>
          {like_btn_color ? "" : <LikePersonCount />}
          <p className="cmts-regular">이 좋아합니다.</p>
        </div>
        <div className="comments-regular">
          <span className="content-bold">developerspace</span>
          <span className="content-regular">
            &nbsp;<span className="content-hashtag">from @dev__gd</span>
          </span>
          <span>&nbsp;Instagram redesign ui implementation</span>
        </div>
        <CommentsContainer
          comments={this.state.commentList}
          onClick={this.handleDeleteComment}
        />
        <button className="view-more-comments">댓글 5개 모두 보기</button>
        <time
          className="time-ago"
          datetime="2020-10-20T06:24:30.000Z"
          title="2020년 10월 20일"
        >
          7시간 전
        </time>
        <div className="post-comments">
          <input
            className="input-comments"
            placeholder="댓글 달기..."
            onChange={this.handleCommentValue}
            onKeyUp={this.handlePressEnter}
            value={commentValue}
          ></input>
          <button
            className="submit"
            onClick={this.addComment}
            style={{
              opacity: commentValue.length !== 0 ? "1" : "0.3",
            }}
          >
            게시
          </button>
        </div>
      </article>
    );
  }
}

export default SecondFeed;
