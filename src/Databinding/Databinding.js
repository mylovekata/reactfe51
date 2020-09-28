import React, { Component } from 'react'

export default class Databinding extends Component {

    // thuộc tính của lớp đối tượng => sử dụng ở nhiều phương thức trong lớp đối tượng
    hocVien = {
        ma: 1,
        avatar: 'https://picsum.photos/200/200',
        tenHocVien: 'Nguyễn văn tèo'
    }
    //phương thức => phương thức có thể gọi trong các phương thức khác của lớp đối tượng
    renderHocVien = () => {
        return <div className="card border-dark">
            <img className="card-img-top" src={this.hocVien.avatar} alt />
            <div className="card-body">
                <h4 className="card-title">{this.hocVien.tenHocVien}</h4>
                <p className="card-text">{this.hocVien.ma}</p>
            </div>
        </div>

    }








render() {
    // binding data là biến
    let title = 'CYBERSOFT'
    let imgSrc = 'https://picsum.photos/200/200';

    //binding data là hàm 
    const renderImg = () => {
        // giá trị  hàm muốn render ra giao diện phải trả về chuỗi ,số,hoặc jsx    return <div className="card text-white bg-primary">
        return <div><img className="card-img-top" src={imgSrc} alt />
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">Text</p>
            </div></div>
    }




    return (
        <div className="container">
            <div id="title">{title}</div>
            <div className="w-25">
                <img src={imgSrc} />
            </div>
            <input className="w-25 form-control" value={title} />

            <div>
                {renderImg}
            </div>
            <h1>Thông tin học viên</h1>
            <ul>
                <li>Mã học viên:{this.hocVien.ma}</li>
                <li>tên học viên:{this.hocVien.tenHocVien}</li>
                <li>Hình ảnh: <img src={this.hocVien.avatar} width='200'></img></li>
            </ul>
        </div >




    )
}
}