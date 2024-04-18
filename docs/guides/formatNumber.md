# Hướng dẫn sử dụng hàm `formatNumber`

Hàm `formatNumber` trong thư viện `hoa-utils` cho phép bạn chuyển đổi một số thành dạng rút gọn với các đơn vị tiêu chuẩn như K, M, B, T, Q, Qn, Sx, Sp, O, N.

## Cách sử dụng

Để chuyển đổi một số thành dạng rút gọn, bạn chỉ cần truyền số đó vào hàm `formatNumber`.

```javascript
const { formatNumber } = require('hoa-utils');

const number1 = 1234;
const number2 = 12345678;
const number3 = -5000000000;

console.log(formatNumber(number1)); // Output: 1.23K
console.log(formatNumber(number2)); // Output: 12.35M
console.log(formatNumber(number3)); // Output: -5B
```

Hàm `formatNumber` sẽ trả về một chuỗi biểu thị số đã được chuyển đổi thành dạng rút gọn với đơn vị phù hợp.

## Xử lý đầu vào không phải kiểu số

Hàm `formatNumber` chỉ hoạt động với đầu vào là kiểu số (number). Nếu đầu vào không phải kiểu số, hàm sẽ trả về chuỗi "0".

Ví dụ:

```javascript
const { formatNumber } = require('hoa-utils');

console.log(formatNumber('abc')); // Output: "0"
console.log(formatNumber(null)); // Output: "0"
console.log(formatNumber(undefined)); // Output: "0"
console.log(formatNumber({})); // Output: "0"
```

Trong trường hợp trên, vì đầu vào không phải kiểu số, hàm `formatNumber` sẽ trả về chuỗi "0".

## Lưu ý

- Hàm `formatNumber` sẽ luôn hiển thị 2 chữ số thập phân, trừ khi số đó chia hết cho 1000, trong trường hợp đó sẽ không có phần thập phân.
- Số âm sẽ được hiển thị với dấu trừ (-) ở đầu.
- Các đơn vị rút gọn được sử dụng là: K (nghìn), M (triệu), B (tỷ), T (nghìn tỷ), Q (triệu tỷ), Qn (tỷ tỷ), Sx, Sp, O, N.
- Hàm `formatNumber` sẽ tự động chọn đơn vị rút gọn phù hợp dựa trên giá trị của số đầu vào.

Ví dụ sử dụng:

```javascript
console.log(formatNumber(1234)); // Kết quả: 1.23K
console.log(formatNumber(999000)); // Kết quả: 999K
console.log(formatNumber(1234567890123)); // Kết quả: 1.23T
console.log(formatNumber(999000000000000000000)); // Kết quả: 999Qn
console.log(formatNumber(-1234)); // Kết quả: -1.23K
```

Hàm `formatNumber` hữu ích khi bạn cần hiển thị số lớn trong dạng rút gọn, dễ đọc hơn. Nó tuân thủ các tiêu chuẩn phổ biến trên toàn cầu cho việc biểu thị số lớn.
