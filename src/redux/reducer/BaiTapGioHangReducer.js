import BaiTapGioHangRedux from "../../BaiTapRedux/BaiTapGioHangRedux";

const stateDefaut = {
  gioHang: [
    {
      maSP: 1,
      tenSP: "Iphone",
      hinhAnh: "https://picsum.photos/50",
      soLuong: 1,
      donGia: 1000,
    },
  ],
};

//hàm reducer trả về state của ứng dụng
export default BaiTapGioHangReducer = (state = stateDefaut, action) => {
  return { ...state };
};
