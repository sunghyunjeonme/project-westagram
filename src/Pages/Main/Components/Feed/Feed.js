import React from "react";
import "./Feed.scss";
import CommentsContainer from "./CommentsContainer";
import LikePersonCount from "./LikePersonCount";
import CommentsIcon from "./CommentsIcon";
import CommentsHeartIcon from "./CommentsHeartIcon";
import {
  COMMENTS_LIKE,
  COMMENTS_SHARE,
  COMMENTS_BALLOON,
} from "../../../../config";

class Feed extends React.Component {
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
              className="user-img"
              alt="프로필 사진"
              src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/89719919_2604026906368737_515135980890488832_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=SllOu8zNKoUAX9RPnN0&amp;oh=13a4dabe40b42faab329e0f923b964f3&amp;oe=5FB55324"
              width="22px"
              height="22px"
            />
            <div className="userinfo-wrapper">
              <p className="username">hyuns619</p>
              <p className="location">Uijeongbu</p>
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
            className="feed-img"
            alt="feed-img"
            src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/113765962_618884988752717_393411432900601728_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_cat=105&amp;_nc_ohc=pkc0FjDWrpAAX9CYpdl&amp;_nc_tp=18&amp;oh=54eb5469dbc595971ebe29dc01015b8e&amp;oe=5FB6875C"
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
          <p className="cmts-bold">hyuns619</p>
          <span className="cmts-regular">님</span>
          {like_btn_color ? "" : <LikePersonCount />}
          <p className="cmts-regular">이 좋아합니다.</p>
        </div>
        <div className="comments-regular">
          <span className="content-bold">hyuns619</span>
          <span className="content-regular">&nbsp;비만 오면 이렇게</span>
          <span className="content-hashtag">
            #비처럼음악처럼 #봄여름가을겨울
          </span>
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

export default Feed;
