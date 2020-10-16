import React, { Component } from 'react'
import { connect } from 'react-redux'

 class KetQuaTroChoi extends Component {
     renderKetQua=()=>{
         //sử dụng thuộc tiinhs 
         let tongDiem = this.props.mangXucXac.reduce((tongDiemXX,xucXac,index)=>{
             return tongDiemXX += xucXac.so;
         },0)

         let ketQua = tongDiem>9 ? 'Tài' : 'Xỉu';

         return <div >
             <span className="display-4 text-dark">{tongDiem} - {ketQua}</span></div>
        
        
        }
    render() {
        return (
            <div className="container text-center mt-5">
                <div className="display-4">
                   {this.renderKetQua()}
                </div>
                <div className="display-4">
                    Bạn Chọn : <span className="text-danger">{this.props.banChon}</span>
                </div>
                <div className="display-4">
                    Số Bàn Thắng : <span className="text-warning">{this.props.soBanThang}</span>
                </div>
                <div className="display-4">
                    Tổng Số Bàn Chơi : <span className="text-primary">{this.props.tongSoBanChoi}</span>
                </div>
                <div onClick={()=>{this.props.playGame()}} className="text-center">
                    <button className="btn btn-success p-2 mt-2">
                        <span style={{fontSize:20}}>PLAY GAME</span>
                    </button>
                </div>
                
            </div>
        )
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        playGame: ()=>{
            let n=0;
            //setInterval là hàm thực thi liên tục theo thời gian quy định=> thực thi cho đên khi ta gọi clearInterval
            let randomXucXac = setInterval(()=>{
                const action = {
                    type : 'RAMDOM_XUC_XAC'
                }
                dispatch(action);
                n++;
                if(n===10){
                    //dừng hàm setInterVal
                    clearInterval(randomXucXac);

                    //dispatch action xử lí kết quả
                    const actionXLKQ = {
                        type: 'END_GAME',
                    }
                    dispatch(actionXLKQ);
                }
            },100);
           
        }
    }
}






const mapStateToProps= state =>{
    return{
        mangXucXac: state.stateBaiTapGameXucXac.mangXucXac,
        banChon: state.stateBaiTapGameXucXac.banChon,
        soBanThang: state.stateBaiTapGameXucXac.soBanThang,
        tongSoBanChoi: state.stateBaiTapGameXucXac.tongSoBanChoi,
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(KetQuaTroChoi)