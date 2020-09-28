import React, { Component } from 'react'

export default class HandleEvent extends Component {
    showTitle = () => {
        alert('hello cybersoft')
    }

    showMess = (mess) => {
        alert(`hello ${mess}`);
    }

    render() {
        return (
            <div>
                {/* xử lí sự kiện truyền callback */}
                <button onClick={this.showTitle}>Hello</button>
                {/* xử lí sự kiện sử dụng hàm trung gian */}
                <button className="btn btn-success" onClick = {()=>{this.showTitle();}}>Show title</button>
                <br />   <br />
                <button onClick={this.showMess.bind(this,'Bửu')}>Show message</button>
                <button onClick={()=>{this.showMess('Quốc Bửu')}}>show Bửu</button>
            </div>
        )
    }
}
