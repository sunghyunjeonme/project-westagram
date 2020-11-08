import React from "react";
import "./Nav.scss";

class NavHeaderIcon extends React.Component {
  render() {
    const { width, height, view, path } = this.props;
    return (
      <li className="nav-icon">
        <svg style={{ width: width, height: height }} viewBox={view}>
          <path d={path} />
        </svg>
      </li>
    );
  }
}
export default NavHeaderIcon;
