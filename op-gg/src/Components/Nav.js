import React, { Component } from "react";
import logo from "../images/opgg_text.png";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        { menuId: 1, title: "#집에있자" },
        { menuId: 2, title: "챔피언분석" },
        { menuId: 3, title: "우르프" },
        { menuId: 4, title: "랭킹" },
        { menuId: 5, title: "프로관전" },
        { menuId: 6, title: "멀티서치" },
        { menuId: 7, title: "통계" },
        { menuId: 8, title: "OP셜" },
        { menuId: 9, title: "커뮤니티" },
      ],
    };
  }

  render() {
    const style = {
      margin: "0 20px 0 0",
    };

    return (
      <div>
        <img src={logo} alt="OP.GG" width={80} />
        <div className="default">리그오브레전드</div>
        <div className="navi-desktop">
          {this.state.menu.map((el) => {
            return (
              <span>
                <a href="/" className="target=" style={style}>
                  {el.title}
                </a>
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Nav;
