import React from "react";
import "./Aside.scss";

class Aside extends React.Component {
  render() {
    return (
      <>
        <div className="position-fixed">
          <aside className="etc-info">
            <div className="my-info">
              <img
                className="my-info-img"
                alt="hyuns619님의 프로필 사진"
                data-testid="user-avatar"
                draggable="false"
                src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/89719919_2604026906368737_515135980890488832_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=SllOu8zNKoUAX9RPnN0&amp;oh=13a4dabe40b42faab329e0f923b964f3&amp;oe=5FB55324"
              />
              <div className="username-wrapper">
                <p className="nickname">hyuns619</p>
                <p className="username">성현</p>
              </div>
            </div>
            <div className="recommend">
              <div className="recommend-text">
                <h5 className="recommend-left">회원님을 위한 추천</h5>
                <span className="recommend-right">모두 보기</span>
              </div>
              <ul className="recommend-list">
                <li>
                  <div className="recommend-user">
                    <img
                      alt="travel_crazy_nu님의 프로필 사진"
                      className="recommend-user-img"
                      data-testid="user-avatar"
                      draggable="false"
                      src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/121246227_387984035565233_8265824432628107675_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=vjw23W6LvoUAX_EamO_&amp;oh=cb56c7b99737529463167c879ce5b1e4&amp;oe=5FB98BB5"
                    />

                    <div className="username-wrapper">
                      <p className="username">travel_crazy_new</p>
                      <p className="status">Instagram 신규 가입</p>
                    </div>
                    <div>
                      <p className="following">팔로우</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="recommend-user">
                    <img
                      className="recommend-user-img "
                      alt="tobyalderweireld"
                      data-testid="user-avatar"
                      draggable="false"
                      src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/121403137_636758853700091_156372287851350930_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=cDKUfgkPF48AX-_H-0-&amp;oh=78e14f9524ddedce116b3e41090786da&amp;oe=5FB7B571"
                    />

                    <div className="username-wrapper">
                      <p className="username">tobyalderweireld</p>
                      <p className="status">hm_son7님 외 6명이 팔로우합니다.</p>
                    </div>
                    <div>
                      <p className="following">팔로우</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="recommend-user">
                    <img
                      className="recommend-user-img"
                      alt="erlendoye1975님의 프로필 사진"
                      data-testid="user-avatar"
                      draggable="false"
                      src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/44787191_290727391784542_3527501118886117376_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=quah_jSzfqMAX-uv8CQ&amp;oh=68d34b2279449842d965a8d9913dc9fc&amp;oe=5FBAB891"
                    />

                    <div className="username-wrapper">
                      <p className="username">erlendoye1975</p>
                      <p className="status">4dallove 외 3명이 팔로우합니다.</p>
                    </div>
                    <div>
                      <p className="following">팔로우</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="recommend-user">
                    <img
                      className="recommend-user-img"
                      alt="5range.elephant님의 프로필 사진"
                      data-testid="user-avatar"
                      draggable="false"
                      src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/119529772_116535086856982_4985682546479765268_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&amp;_nc_ohc=QpLJMtaroZ0AX891Zyv&amp;oh=bcf7b727a9f8d02022fc9e5269f21ba7&amp;oe=5FB868D5"
                    />
                    <div className="username-wrapper">
                      <p className="username">5range.elephant</p>
                      <p className="status">Instagram 신규 가입</p>
                    </div>
                    <div>
                      <p className="following">팔로우</p>
                    </div>
                  </div>
                </li>
              </ul>
              <footer className="recommend-footer">
                <span className="footer-font">
                  소개 · 도움말 · 홍보 센터 · API · 채용 정보 · 개인정보처리방침
                  · 약관 위치 · 인기 계정 · 해시태그 · 언어
                  <br />© 2020 INSTAGRAM FROM HYUNS
                </span>
              </footer>
            </div>
          </aside>
        </div>
      </>
    );
  }
}

export default Aside;
