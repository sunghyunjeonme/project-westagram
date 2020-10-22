import React from "react";
import "./Nav.scss";
import NavHeaderIcon from "./NavHeaderIcon";
import {
  PATH_HOME,
  PATH_DIRECT,
  PATH_FIND,
  PATH_HEART,
} from "../../../../config";

class Nav extends React.Component {
  render() {
    return (
      <>
        <nav className="nav">
          <div className="nav-container">
            <div className="nav-logo-wrapper">
              <img src="/images/nav_logo.png" alt="logo" />
            </div>
            <div className="nav-input-wrapper">
              <input className="nav-search" type="text" placeholder="검색" />
              <img
                className="search-img"
                alt="searchImage"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"
              />
            </div>

            <div className="nav-icons-container">
              <ul className="nav-icons-wrapper">
                <NavHeaderIcon
                  width="22px"
                  height="22px"
                  margin="25px"
                  view="0 0 48 48"
                  path={PATH_HOME}
                />

                <NavHeaderIcon
                  width="22px"
                  height="22px"
                  margin="25px"
                  view="0 0 48 48"
                  path={PATH_DIRECT}
                />
                <NavHeaderIcon
                  width="22px"
                  height="22px"
                  margin="25px"
                  view="0 0 48 48"
                  path={PATH_FIND}
                />
                <NavHeaderIcon
                  width="22px"
                  height="22px"
                  margin="25px"
                  view="0 0 48 48"
                  path={PATH_HEART}
                />
                <li className="nav-icon">
                  <img
                    className="nav-profile-img"
                    alt="hyuns619님의 프로필 사진"
                    data-testid="user-avatar"
                    draggable="false"
                    src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/89719919_2604026906368737_515135980890488832_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=SllOu8zNKoUAX9RPnN0&amp;oh=13a4dabe40b42faab329e0f923b964f3&amp;oe=5FB55324"
                    width="22px"
                    height="22px"
                  />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Nav;
