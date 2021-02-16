import React, { Component } from "react";

class Search extends Component {
  state = {
    name: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      name: "",
    });
  };

  render() {
    const style = {
      display: "block",
      padding: "15px 150px 18px 17px",
      border: "none",
      lineHeight: "17px",
      fontSize: "14px",
      boxSizing: "border-box",
    };
    return (
      <div class="center">
        <input
          name="name"
          placeholder="소환사명, 소환사명, ..."
          onChange={this.handleChange}
          value={this.state.name}
        ></input>
        <button type="submit">.GG</button>
      </div>
    );
  }
}

export default Search;
