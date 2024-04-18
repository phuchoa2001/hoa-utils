# Hướng dẫn sử dụng hàm `toUpperCaseAndRemoveVietnamese`

Hàm `toUpperCaseAndRemoveVietnamese` cho phép bạn chuyển đổi một chuỗi thành chữ in hoa và loại bỏ các ký tự tiếng Việt trong chuỗi đó.

## Cách sử dụng

Để sử dụng hàm `toUpperCaseAndRemoveVietnamese`, bạn chỉ cần truyền vào một chuỗi hoặc một giá trị có thể chuyển đổi thành chuỗi.

```javascript
const { toUpperCaseAndRemoveVietnamese } = require('hoa-utils');

const originalString = 'Xin chào, Việt Nam';
const uppercasedString = toUpperCaseAndRemoveVietnamese(originalString);
console.log(uppercasedString); // Output: 'XIN CHAO, VIET NAM'

const number = 123;
const numberString = toUpperCaseAndRemoveVietnamese(number);
console.log(numberString); // Output: '123'
```

Hàm `toUpperCaseAndRemoveVietnamese` sẽ trả về một chuỗi mới đã được chuyển đổi thành chữ in hoa và loại bỏ các ký tự tiếng Việt. Nếu đầu vào không phải là chuỗi hoặc số, hàm sẽ trả về một chuỗi thông báo lỗi tương ứng với kiểu dữ liệu của đầu vào.

## Lưu ý

- Hàm `toUpperCaseAndRemoveVietnamese` chỉ hoạt động với kiểu dữ liệu chuỗi và số. Nếu đầu vào là một kiểu dữ liệu khác, hàm sẽ trả về một chuỗi thông báo lỗi.
- Nếu đầu vào là một số, hàm sẽ chuyển đổi số đó thành chuỗi và trả về chuỗi đó mà không thực hiện bất kỳ thao tác nào khác.

Ví dụ sử dụng với các kiểu dữ liệu khác nhau:

```javascript
console.log(toUpperCaseAndRemoveVietnamese(true)); // Output: 'Invalid input: boolean'
console.log(toUpperCaseAndRemoveVietnamese(null)); // Output: 'Invalid input: null'
console.log(toUpperCaseAndRemoveVietnamese({})); // Output: 'Invalid input: object'
console.log(toUpperCaseAndRemoveVietnamese([])); // Output: 'Invalid input: array'
```
