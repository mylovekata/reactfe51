import React, { Component } from 'react'
import {connect} from "react-redux";

 class SanPhamRedux extends Component {
    render() {
        let {sanPham} = this.props;

        return (
                <div classname="card text-left">
                    <img style={{width:'100%',height:300}} classname="card-img-top" src={sanPham.hinhAnh} alt={sanPham.hinhAnh} />
                    <div classname="card-body">
                        <h4 classname="card-title">{sanPham.tenSP}</h4>
                        <p classname="card-text">{sanPham.giaBan}</p>
                        <button onClick={()=>{
                            //Gọi hàm được tạo ra từ mapDispatchToProps
                            this.props.themGioHang(sanPham);
                        }} className="btn btn-danger">Thêm giỏ hàng</button>
                    </div>
                </div>
        )
    }
}
// hàm láy state từ redux biến thành props component
const mapStateToProps =(state)=>{
    return{

    }
}
//hàm tạo 1 hàm xử lý để đưa giá trị lên redux
const mapDispatchToProps = (dispatch) =>{
    return{
        themGioHang: (sanPhamClick) => {
            //từ sản phảm được click => tạo ra sp giỏ hàng
            let spGH = {...sanPhamClick,soLuong:1};
            //để gửi giá trị lên reducer cần 1 object có thuộc tính type để phân iệt stype nào thay đổi
            let action ={
                type:'THEM GIO HANG', // thuộc tính bắt buộc
                spGH:spGH
            }
            //dùng hàm dispatch mà redux cung cấp đưa action lên reducer
            dispatch(action);
            // console.log(sanPhamClick);
        }
    }
}
//tham số 1 hàm connect là 1 hàm (callbackFunction): lấy giá trị từ reducer về
//tham số 2 hàm connect là 1 hàm (callbackFunction): đưa giá trị lên reducer
export default connect(mapStateToProps,mapDispatchToProps )(SanPhamRedux);
