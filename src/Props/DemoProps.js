import React, { Component } from "react";
import ClassProps from "../ListAnhKeys/ClassProps";
import FunctionProps from "./FunctionProps";

export default class DemoProps extends Component {
  state = {
    ten: "Nguyễn Quốc Bửu",
    lop: 51,
  };

  render() {
    return (
      <div>
        <h2>Props</h2>
        {/* //   cách truyền Props trong reactJS */}
        <FunctionProps hoVaTen={this.state.ten} lopCuaTui={this.state.lop} />
        <ClassProps hoVaTen={this.state.ten} lopCuaTui={this.state.lop} />
      </div>
    );
  }
}
