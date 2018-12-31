import React, { Component } from "react";
import Moment from "react-moment";
import "../styles/Card.css";

const style = {
  padding: "30px"
};

class Link extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div style={style} className="card card-1">
          <h6 style={{ color: "grey" }}>
            <Moment format="YYYY-MM-DD / HH:mm">
              {this.props.link.createdAt}
            </Moment>
          </h6>
          <h4>{this.props.link.description}</h4> ({this.props.link.url})
        </div>
      </div>
    );
  }
}

export default Link;
