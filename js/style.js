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

// Nhập mảng
var ListNumber = [];
function getEle(id) {
  return document.getElementById(id);
}

function showListNumber(data) {
  var content = "";
  for (var i = 0; i < data.length; i++) {
    const number = data[i];
    content += number + ",";
  }
  return content;
}
function addNumber() {
  const input = Number(getEle("txtNumber").value);
  ListNumber.push(input);
  const content = showListNumber(ListNumber);
  getEle("showListNumber").innerHTML = content;
}

//1 Tính tổng các số dương trong mảng:
// Tính tổng số chẵn
/****
 * 0. Khai báo biến tổng =0;
 * 1. duyệt mảng ListNumber
 *  1.1 lấy ra số tại vị trí thứ i;
 *  1.2 kiểm tra số đó có phải số dương không (i>0)?
 *  1.3 nếu là số dương thì cộng vào biến tong
 * 2. Hiển thị kết quả
 * */

function tongSoDuong() {
  var tong = 0;

  for (var i = 0; i < ListNumber.length; i++) {
    const number = ListNumber[i];
    if (number > 0) {
      tong += number;
    }
    console.log("tong", tong);
  }
  const result = "Tổng các số dương trong mảng: " + tong;
  getEle("txtTongSoDuong").innerHTML = result;
}

// 2 Tính đếm số dương
/***
 * Check listnumber.lenght nhập vào bằng rỗng thì xuất thông báo
 * 0. Khai báo count =0;
 * 1. duyệt mảng listnumber
 * 1.1 lấy ra số tại vị trí thứ i
 * 1.2 kiểm tra số đó có phải số dương không?
 * 1.3 count + 1
 * 2. hiển thị UI
 * */

function demSoDuong() {
  var count = 0;
  for (var i = 0; i < ListNumber.length; i++) {
    const number = ListNumber[i];
    if (number > 0) {
      count++;
    }
    // const result = "Có: " + count + " tổng số dương trong mảng";
    getEle("txtDemSoDuong").innerHTML = " Có : " + count + " tổng số dương";
  }
}

//3 Tìm số nhỏ nhất trong mảng
function findNumberMin() {
  var number = ListNumber[0];
  var minnumber = Math.min(...ListNumber);
  getEle("txtTimSoNhoNhat").innerHTML = minnumber;
}

// 4 tìm số dương nhỏ nhất.
function findNumberEvenMin() {
  var number = ListNumber[0];
  var minnumber = Math.min(...ListNumber);
  getEle("txtTimSoDuongNhoNhat").innerHTML = minnumber;
}

//7 sắp xếp tăng dần:

/**
 * Sắp xếp DTB tăng dần
 * 1. Duyệt qua từng phần tử trong mảng avergeList (i = 0)
 *    1.2. Duyệt qua từng phần tử trong mảng avergeList (j = i + 1)
 *        1.2.2. So sánh avergeList[i] và avergeList[j]
 *        1.2.3. Nếu avergeList[i] > avergeList[j] => hoán đổi vị trí của 2 phần tử đó
 *        1.2.4. hoán đổi vị trí của 2 phần tử đó
 */

var averageList = [];
function getAverageList() {
  const inputValue = getEle("txtNumber").value;
  var currentValue = parseFloat(inputValue);
  averageList.push(currentValue);
}
function btnsapXepTangDan() {
  for (var i = 0; i < averageList.length - 1; i++) {
    for (var j = i + 1; j < averageList.length; j++) {
      if (averageList[i] > averageList[j]) {
        var temp = averageList[i];
        averageList[i] = averageList[j];
        averageList[j] = temp;
      }
    }
  }
  console.log("avergeList:", averageList);
  var result = averageList[i];
  document.getElementById("txtsapXepTangDan").innerHTML = result;
}
