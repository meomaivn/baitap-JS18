/**Mô hình sơ đồ 3 khối
 * input:
 * Nhập vào số n và lưu số n vào 1 mảng
 * Xử lí:
 * Duyệt mảng và viết logic phù hợp với từng yêu cầu
 * output:
1. Tổng các số dương trong mảng.
2. Đếm có bao nhiêu số dương trong mảng.
3. Tìm số nhỏ nhất trong mảng.
4. Tìm số dương nhỏ nhất trong mảng.
5. Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.
6. Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).
7. Sắp xếp mảng theo thứ tự tăng dần.
8. Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1.
9. Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
10. So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
 */

function DOM(selector) {
  return document.querySelector(selector);
}

var mangSoN = [];
DOM(".btnThemSo").onclick = function () {
  var soN = DOM("#soN").value * 1;
  mangSoN.push(soN);
  DOM(".inMang").innerHTML = mangSoN;
  DOM("#soN").value = "";
};

/**********************Tính tổng các số dương****************** */
function tinhTongCacSoDuong() {
  var tongSoDuong = 0;
  for (var i = 0; i < mangSoN.length; i++) {
    if (mangSoN[i] > 0) {
      tongSoDuong += mangSoN[i];
    }
  }
  DOM(
    ".txtTongSoDuong"
  ).innerHTML = ` Tổng số các số dương trong mảng là ${tongSoDuong}`;
}
DOM(".btnTongSoDuong").onclick = tinhTongCacSoDuong;
/********************Đếm các số dương*************************** */
function demCacSoDuongTrongMang() {
  var dem = 0;
  for (var i = 0; i < mangSoN.length; i++) {
    if (mangSoN[i] > 0) {
      dem += 1;
    }
  }
  DOM(".txtDemSoDuong").innerHTML = ` Số số dương trong mảng là ${dem}`;
}

DOM(".btnDemSoDuong").onclick = demCacSoDuongTrongMang;
/*****************Tìm số nhỏ nhất********************** */
function timSoNhoNhat() {
  var min = mangSoN[0];
  for (var i = 0; i < mangSoN.length; i++) {
    if (mangSoN[i] < min) {
      min = mangSoN[i];
    }
  }
  DOM(".txtTimSoNhoNhat").innerHTML = ` Số nhỏ nhất trong mảng là: ${min}`;
}
DOM(".btnTimSoNhoNhat").onclick = timSoNhoNhat;
/******************Tìm số dương nhỏ nhất trong mảng****************** */
function timSoDuongNhoNhat() {
  // Tách mảng số nguyên
  var arrSoDuong = [];
  for (let i = 0; i < mangSoN.length; i++) {
    if (mangSoN[i] > 0) {
      arrSoDuong.push(mangSoN[i]);
    }
  }
  // Tìm số nguyên nhỏ nhất
  var min = arrSoDuong[0];
  for (let j = 0; j < arrSoDuong.length; j++) {
    if (arrSoDuong[j] < min) {
      min = arrSoDuong[j];
    }
  }
  DOM(
    ".txtTimSoDuongNhoNhat"
  ).innerHTML = ` Số dương nhỏ nhất trong mảng là: ${min}`;
}
DOM(".btnTimSoDuongNhoNhat").onclick = timSoDuongNhoNhat;

/******************Tìm số chẳn cuối cùng trong mảng****************** */ function timSoChanCuoiCung() {
  var soChanCuoiCung = -1;
  for (var i = 0; i < mangSoN.length; i++) {
    if (mangSoN[i] % 2 == 0 && mangSoN[i] != 0) {
      soChanCuoiCung = mangSoN[i];
    }
  }
  if (soChanCuoiCung == -1) {
    DOM(".txtTimSoChanCuoiCung").innerHTML = `Không có số chẳn`;
  } else {
    DOM(
      ".txtTimSoChanCuoiCung"
    ).innerHTML = `Số chẳn cuối cùng là ${soChanCuoiCung}`;
  }
}
DOM(".btnTimSoChanCuoiCung").onclick = timSoChanCuoiCung;
/*****************Đổi vị trí 2 giá trị****************** */
function doiViTri() {
  var vt1 = DOM("#viTri1").value * 1;
  var vt2 = DOM("#viTri2").value * 1;
  var tam = mangSoN[vt1];
  mangSoN[vt1] = mangSoN[vt2];
  mangSoN[vt2] = tam;
  DOM(".txtDoiGiaTri").innerHTML = mangSoN;
}
DOM(".btnDoiGiaTri").onclick = doiViTri;
/******************Sắp xếp tăng dần******************************** */
function sapXepTangDan() {
  DOM(".txtsapXepTangDan").innerHTML = mangSoN.sort();
}
DOM(".btnsapXepTangDan").onclick = sapXepTangDan;
/*******************Tìm số nguyên tố đầu tiên trong mảng********** */

function soNguyenToDauTien() {
  var soNguyenToDauTien = -1;
  for (let i = 0; i < mangSoN.length; i++) {
    var dem = 0;
    for (let j = 1; j <= mangSoN[i]; j++) {
      if (mangSoN[i] % j == 0) {
        dem++;
      }
    }
    if (dem == 2) {
      soNguyenToDauTien = mangSoN[i];
      break;
    }
  }
  if (soNguyenToDauTien == -1) {
    DOM(".txtTimSoNguyenTo").innerHTML = `Không có số nguyên tố`;
  } else {
    DOM(
      ".txtTimSoNguyenTo"
    ).innerHTML = `Số nguyên tố đầu tiên là ${soNguyenToDauTien}`;
  }
}
DOM(".btnTimSoNguyenTo").onclick = soNguyenToDauTien;
/***************Nhập thêm mảng số thực và đếm số dương trong mảng mới********* */
var mangSoThuc = [];
DOM(".btnThem").onclick = function () {
  var SoThuc = DOM("#SoThuc").value * 1;
  mangSoThuc.push(SoThuc);
  var mangMoi = mangSoN.concat(mangSoThuc);
  DOM(".txtMangSoThuc").innerHTML = mangMoi;
  DOM("#SoThuc").value = "";
};
//   var mangMoi =  mangSoN.concat(mangSoThuc);
//   console.log(mangMoi);

function demSoNguyen() {
  var mangMoi = mangSoN.concat(mangSoThuc);
  var dem = 0;
  for (let i = 0; i < mangMoi.length; i++) {
    if (mangMoi[i] % 1 == 0 && mangMoi[i] != 0) {
      dem++;
    }
  }
  DOM(".txtSoNguyen").innerHTML = `Có ${dem} số nguyên trong mảng`;
}
DOM(".btnMangSoThuc").onclick = demSoNguyen;

/********************So Sánh số âm dương***************** */
function soSanhAMDuong() {
  var soSoAm = 0;
  var soSoDuong = 0;
  for (let i = 0; i < mangSoN.length; i++) {
    if (mangSoN[i] > 0) {
      soSoDuong++;
    } else if (mangSoN[i] < 0) {
      soSoAm++;
    }
  }
  if (soSoDuong > soSoAm) {
    DOM(".txtSoSanhAmDuong").innerHTML = `Số dương > số âm`;
  } else if (soSoDuong < soSoAm) {
    DOM(".txtSoSanhAmDuong").innerHTML = `Số dương < số âm`;
  } else DOM(".txtSoSanhAmDuong").innerHTML = `Số dương = số âm`;
}
DOM(".btnSoSanhAmDuong").onclick = soSanhAMDuong;

var x = 8.5;
if (x % 1 == 0) {
  console.log("Đúng");
} else console.log("Sai");
console.log(x % 1);
