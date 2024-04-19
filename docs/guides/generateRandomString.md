# Hướng dẫn sử dụng hàm `generateRandomString`

Hàm `generateRandomString` được sử dụng để tạo ra một chuỗi ngẫu nhiên với độ dài và tập ký tự tùy chỉnh. Hàm này hữu ích trong nhiều trường hợp như tạo mật khẩu ngẫu nhiên, tạo token xác thực, hoặc bất kỳ trường hợp nào cần tạo một chuỗi duy nhất.

## Cách sử dụng

Để tạo một chuỗi ngẫu nhiên, bạn cần gọi hàm `generateRandomString` và truyền vào tham số `length` tương ứng với độ dài mong muốn của chuỗi.

```javascript
const generateRandomString = require('./generateRandomString');

const randomString = generateRandomString(12);
console.log(randomString); // Output: 'Tn8Qk2Xp9Zy7'
```

Nếu không truyền tham số `length`, hàm sẽ sử dụng giá trị mặc định là 10.

```javascript
const randomString = generateRandomString();
console.log(randomString); // Output: 'Jq3Hn5Tz8W'
```

## Lưu ý

- Tham số `length` phải là một số nguyên dương. Nếu truyền vào một giá trị khác, hàm sẽ trả về thông báo lỗi `'Error: Input must be a number'`.
- Tập ký tự mặc định để tạo chuỗi ngẫu nhiên bao gồm các ký tự chữ cái viết hoa, viết thường và các chữ số từ 0 đến 9.

## Ví dụ

Tạo một chuỗi ngẫu nhiên với độ dài 20 ký tự:

```javascript
const randomString = generateRandomString(20);
console.log(randomString); // Output: 'Tn8Qk2Xp9Zy7Jq3Hn5Tz'
```

Tạo một chuỗi ngẫu nhiên với tập ký tự tùy chỉnh:

```javascript
const stringConstants = require('../contants/stringConstants');
stringConstants.CHARACTERS = '0123456789';

const randomString = generateRandomString(6);
console.log(randomString); // Output: '456789'
```

Trong ví dụ trên, chúng ta đã thay đổi giá trị của `stringConstants.CHARACTERS` thành chuỗi chỉ chứa các chữ số từ 0 đến 9, và sau đó gọi `generateRandomString(6)` để tạo một chuỗi ngẫu nhiên có độ dài 6 ký tự từ tập ký tự đã chỉnh sửa.

Hàm `generateRandomString` cung cấp một cách đơn giản và linh hoạt để tạo các chuỗi ngẫu nhiên với độ dài và tập ký tự tùy chỉnh, phù hợp với nhiều trường hợp sử dụng khác nhau trong lập trình JavaScript.
