import React, { Component } from 'react'

export default class DemoConditionalAndState extends Component {
    /**
     * isLogin là thuộc tính của class
     *     true: đã login => hiện tên người dùng
     *     flase: chưa login =>  hiện nút login
     */
    state = {
        isLogin: false,
    }
    // isLogin =false; cách này sai vì render không chạy lại
// phương thức của class 
handleLogin = () =>{
    console.log("run");
    // this.isLogin = true;
    // this.state.isưLogin = true; //cách này cũng sai vì như cách trên vì render không chạy lại
    this.setState({
        isLogin : true,
    })

}
    renderLogin = () => {
        if (this.state.isLogin){
            //hiện tên người dùng
            return <p>Nguyễn Quốc Bửu</p>

        }else{
            // hiện nút login
            return <button onClick={this.handleLogin}>Login</button>

        }
    }
// render là phương thức cập nhập lại giao diện
    render() {
        console.log ("run render");
        return (
            <div>
                <h2>ConditionalAndState</h2>
                {this.renderLogin()}
            </div>
        );
    }
}
