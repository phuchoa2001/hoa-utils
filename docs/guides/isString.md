# Hướng dẫn sử dụng hàm `isString`

Hàm `isString` trong thư viện hoa-utils cho phép bạn kiểm tra xem một giá trị có phải là một chuỗi (string) hay không. Hàm này được import trực tiếp từ thư viện Lodash.

## Cách sử dụng

Để sử dụng hàm `isString`, bạn cần import nó từ thư viện hoa-utils:

```javascript
const { isString } = require('hoa-utils');
```

Sau đó, bạn có thể truyền bất kỳ giá trị nào vào hàm `isString`. Hàm này sẽ trả về `true` nếu giá trị đó là một chuỗi, ngược lại sẽ trả về `false`.

```javascript
const { isString } = require('hoa-utils');

const str = 'hello';
const num = 42;
const obj = { a: 1 };
const arr = [1, 2, 3];
const nullValue = null;

console.log(isString(str)); // Output: true
console.log(isString(num)); // Output: false
console.log(isString(obj)); // Output: false
console.log(isString(arr)); // Output: false
console.log(isString(nullValue)); // Output: false
```

Trong ví dụ trên, `isString('hello')` sẽ trả về `true` vì `'hello'` là một chuỗi. Các giá trị khác như `42`, `{ a: 1 }`, `[1]`, và `null` không phải là chuỗi, nên `isString` sẽ trả về `false`.

## Lưu ý

- Hàm `isString` từ hoa-utils được import trực tiếp từ Lodash, vì vậy nó hoạt động giống với cách kiểm tra kiểu dữ liệu chuỗi trong JavaScript, nhưng cung cấp một cách nhất quán để kiểm tra kiểu dữ liệu trên nhiều môi trường và phiên bản khác nhau của JavaScript.

Bằng cách sử dụng hàm `isString` từ hoa-utils, bạn có thể đảm bảo rằng việc kiểm tra kiểu dữ liệu chuỗi được thực hiện một cách nhất quán và đáng tin cậy trong ứng dụng của bạn.
