// state less component laf coponenr function (react function component)
// cu phap tao : rfc => enter
import React from 'react'

export default function DemoStateless() {
    return (
        // bên trong lệnh return của function component là nội dung giao diện của thẻ này. lưu ý: nội dung component phải được bao phủ bởi 1 thẻ bất kỳ
        <>
            <div className="container">
                <div className="card text-white bg-dark w-25">
                    <img className="card-img-top" src="https://picsum.photos/200/200" alt />
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Text</p>
                    </div>
                </div>
            </div>


        </>
    )
}
