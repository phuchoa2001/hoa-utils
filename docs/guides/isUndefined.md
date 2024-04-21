# Hướng dẫn sử dụng hàm `isUndefined`

Hàm `isUndefined` trong thư viện hoa-utils cho phép bạn kiểm tra xem một giá trị có phải là `undefined` hay không. Hàm này được import trực tiếp từ thư viện Lodash.

## Cách sử dụng

Để sử dụng hàm `isUndefined`, bạn cần import nó từ thư viện hoa-utils:

```javascript
const { isUndefined } = require('hoa-utils');
```

Sau đó, bạn có thể truyền bất kỳ giá trị nào vào hàm `isUndefined`. Hàm này sẽ trả về `true` nếu giá trị đó là `undefined`, ngược lại sẽ trả về `false`.

```javascript
const { isUndefined } = require('hoa-utils');

let undefinedVar;
const num = 42;
const str = 'hello';
const obj = { a: 1 };
const nullValue = null;

console.log(isUndefined(undefinedVar)); // Output: true
console.log(isUndefined(num)); // Output: false
console.log(isUndefined(str)); // Output: false
console.log(isUndefined(obj)); // Output: false
console.log(isUndefined(nullValue)); // Output: false
```

Trong ví dụ trên, `isUndefined(undefinedVar)` sẽ trả về `true` vì `undefinedVar` chưa được gán giá trị và mặc định là `undefined`. Các giá trị khác như `42`, `'hello'`, `{ a: 1 }`, và `null` không phải là `undefined`, nên `isUndefined` sẽ trả về `false`.

## Lưu ý

- Hàm `isUndefined` từ hoa-utils được import trực tiếp từ Lodash, vì vậy nó hoạt động giống với cách kiểm tra giá trị `undefined` trong JavaScript, nhưng cung cấp một cách nhất quán để kiểm tra kiểu dữ liệu trên nhiều môi trường và phiên bản khác nhau của JavaScript.
- Lưu ý rằng `isUndefined` chỉ kiểm tra giá trị `undefined`, không kiểm tra `null` hay các giá trị khác
- Khi sử dụng `isUndefined` với một biến chưa được khai báo, JavaScript sẽ ném ra lỗi `ReferenceError` trước khi hàm `isUndefined` được gọi.

Bằng cách sử dụng hàm `isUndefined` từ hoa-utils, bạn có thể đảm bảo rằng việc kiểm tra giá trị `undefined` được thực hiện một cách nhất quán và đáng tin cậy trong ứng dụng của bạn.
