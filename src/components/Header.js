import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { AUTH_TOKEN } from "../constants";

const style = {
  width: "100vw",
  padding: "0px 30px",
  display: "flex",
  alignItems: "center"
};

class Header extends Component {
  render() {
    console.log(localStorage);
    const authToken = localStorage.getItem(AUTH_TOKEN);
    return (
      <div className="flex pa1 justify-between nowrap orange" style={style}>
        <div
          className="flex flex-fixed black"
          style={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <div className="fw7 mr1">
            <h1>Hacker News</h1>
          </div>
          <Link to="/" className="ml1 no-underline black">
            new
          </Link>
          {authToken && (
            <div className="flex">
              <div className="ml1">|</div>
              <Link to="/create" className="ml1 no-underline black">
                submit
              </Link>
            </div>
          )}
        </div>
        <div className="flex flex-fixed">
          {authToken ? (
            <div
              className="ml1 pointer black"
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN);
                this.props.history.push(`/`);
              }}
            >
              logout
            </div>
          ) : (
            <Link to="/login" className="ml1 no-underline black">
              login
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
