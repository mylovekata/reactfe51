import React, { Component } from "react";

export default class DemoListAndKeys extends Component {
  danhSachKhoaHoc = ["NodeJS", "ReactJS", "VueJS"];
  renderDanhSachKhoaHoc = () => {
    return this.danhSachKhoaHoc.map((khoaHoc, index) => {
      return <li>{khoaHoc}</li>;
    });
  };
  render() {
    return (
      <div>
        <h2>List And Keys</h2>
        <h3>Danh Sách Khóa Học</h3>
        <ul>{this.renderDanhSachKhoaHoc()}</ul>
      </div>
    );
  }
}
