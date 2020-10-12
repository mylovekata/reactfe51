import React, { Component } from "react";

export default class SanPham extends Component {
  handleDetail = () => {
    const currentProduct = this.props.propduct;
    this.props.xuLyChiTiet(currentProduct);
  };
  render() {
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={this.props.propduct.hinhAnh}
          alt="hinhdep"
        />
        <div className="card-body">
          <h4 className="card-title">{this.props.propduct.tenSP}</h4>
          <button className="btn btn-success" onClick={this.handleDetail}>
            Chi tiết
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              const currentProduct = this.props.propduct;
              this.props.hanldeCardList(currentProduct);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
