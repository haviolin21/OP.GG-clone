import React, { Component } from "react";
import Nav from "./Components/Nav";
import Search from "./Components/Search";
import bgImg from "./images/sheen.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <Nav />
        <img src={bgImg} alt="" class="center" />
        <Search />
      </div>
    );
  }
}

export default App;
