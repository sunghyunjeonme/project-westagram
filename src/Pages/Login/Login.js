import React, { Component } from "react";
import "./Login.scss";

class Login extends Component {
  goToFacebook = () => {
    window.open("http://facebook.com");
  };

  findPw = () => {
    window.open(
      "https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login"
    );
  };

  render() {
    return (
      <div className="login">
        <div className="img-form-wrapper">
          <div className="img-wrapper">
            <img
              src="images/mobile.png"
              className="iphone-img"
              alt="mobile-img"
            />
          </div>
          <div className="login-wrapper">
            <div className="login-container">
              <header className="logo-wrapper">
                <img
                  className="instagram-img"
                  src="/images/logo_text.png"
                  alt="logo"
                />
              </header>
              <form className="login-form">
                <input
                  className="input-login-id"
                  type="text"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                />
                <input
                  className="input-login-pw"
                  type="password"
                  placeholder="비밀번호"
                />
                <button className="login-btn">로그인</button>
                <div className="line-or-line-wrapper">
                  <div className="line"></div>
                  <div className="or">또는</div>
                  <div className="line"></div>
                </div>
                <button className="fb-login-wrapper">
                  <img
                    class="fb-icon"
                    alt="fb-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/534px-F_icon.svg.png"
                  />
                  <span className="fb-login-text" onClick={this.goToFacebook}>
                    Facebook으로 로그인
                  </span>
                </button>
                <section className="forget-pw" onClick={this.findPw}>
                  <p>비밀번호를 잊으셨나요?</p>
                </section>
              </form>
            </div>
            <div className="signup-container">
              <div className="signup-text-normal">
                <p>
                  계정이 없으신가요?&nbsp;
                  <span className="signup-text-bold">가입하기</span>
                </p>
              </div>
            </div>
            <section className="down-app-container">
              <p className="down-app-text">앱을 다운로드하세요.</p>
              <div className="down-app-wrapper">
                <img
                  src="images/app_store.png"
                  className="down-at-and"
                  alt="gogleplay"
                />
                <img
                  src="images/google_play.png"
                  className="down-at-ios"
                  alt="appstore"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
