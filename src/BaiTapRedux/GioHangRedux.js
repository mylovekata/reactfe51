import React, { Component } from 'react'
import SanPhamGHRedux from './SanPhamGHRedux'

//Import thư viện kết nối react component và redux store
import {connect} from 'react-redux';

class GioHangRedux extends Component {
    
    renderGioHang = ()=>{
        return this.props.gioHang.map((spGioHang,index)=>{
            return <tr key={index}>
            <td>{spGioHang.maSP}</td>
            <td>{spGioHang.tenSP}</td>
            <td><img src={spGioHang.hinhAnh} width ={50} height={50} /></td>
            <td><button className="btn btn-dark"  onClick={()=>this.props.tangGiamSoLuong(spGioHang.maSP,true)}
            >+</button>{spGioHang.soLuong}<button className="btn btn-dark" onClick={()=>this.props.tangGiamSoLuong(spGioHang.maSP,false)}>-</button></td>
            <td>{spGioHang.giaBan}</td>
            <td>{spGioHang.soLuong *spGioHang.giaBan}</td>
            <td><button className="btn btn-danger" onClick={()=>this.props.xoaGioHang(spGioHang.maSP)}>Xóa</button></td>
        </tr>
        })
    }
    render() {
        console.log('props',this.props)
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Mã sp</th>
                        <th>Tên sp</th>
                        <th>Hình ảnh</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderGioHang()}
                </tbody>
            </table>
        )
    }
}

//Lấy state từ redux store biến thành props của component
//tham số state: Đại diện cho rootReducer
const mapStateToProps = (rootReducer) => {
    return {
        gioHang:rootReducer.StateBaiTapGioHang.gioHang
    }
}

//tạo ra 1 props là hàm đưa giá trị lên reducer => để set lại state.
const mapDispatchToProps = (dispatch) => {
    return{
        xoaGioHang: (maSPClick)=>{
            console.log(maSPClick);
            //Tạo ra action gửi lên reducer
            const action ={
                type: 'XOA_GIO_HANG',
                maSPClick
            }
            //Dùng hàm dispatch đưa lên reducer
            dispatch(action);
        },
        tangGiamSoLuong : (maSP,tangGiam)=>{
            //tạo ra action
            const action = {
                type: 'TANG_GIAM_SO_LUONG',
                maSP,
                tangGiam,
            }
            dispatch(action);

        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GioHangRedux); //Kết nối giữa gioHangReduxComponent và redux store