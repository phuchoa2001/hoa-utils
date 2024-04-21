# Hướng dẫn sử dụng hàm `isFunction`

Hàm `isFunction` trong thư viện hoa-utils cho phép bạn kiểm tra xem một giá trị có phải là một hàm (function) hay không. Hàm này được import trực tiếp từ thư viện Lodash.

## Cách sử dụng

Để sử dụng hàm `isFunction`, bạn cần import nó từ thư viện hoa-utils:

```javascript
const { isFunction } = require('hoa-utils');
```

Sau đó, bạn có thể truyền bất kỳ giá trị nào vào hàm `isFunction`. Hàm này sẽ trả về `true` nếu giá trị đó là một hàm, ngược lại sẽ trả về `false`.

```javascript
const { isFunction } = require('hoa-utils');

const myFunction = () => {};
const myObject = { a: 1 };
const myString = 'hello';
const myNumber = 42;

console.log(isFunction(myFunction)); // Output: true
console.log(isFunction(myObject)); // Output: false
console.log(isFunction(myString)); // Output: false
console.log(isFunction(myNumber)); // Output: false
```

Trong ví dụ trên, `isFunction(() => {})` sẽ trả về `true` vì `() => {}` là một hàm. Các giá trị khác như `{ a: 1 }`, `'hello'`, và `42` không phải là hàm, nên `isFunction` sẽ trả về `false`.

## Lưu ý

- Hàm `isFunction` từ hoa-utils được import trực tiếp từ Lodash, vì vậy nó hoạt động giống với cách kiểm tra kiểu dữ liệu hàm trong JavaScript, nhưng cung cấp một cách nhất quán để kiểm tra kiểu dữ liệu trên nhiều môi trường và phiên bản khác nhau của JavaScript.
- Lưu ý rằng `isFunction` sẽ trả về `true` cho cả hàm được định nghĩa bằng cú pháp truyền thống (`function() {}`) và cú pháp mũi tên (`() => {}`).

Bằng cách sử dụng hàm `isFunction` từ hoa-utils, bạn có thể đảm bảo rằng việc kiểm tra kiểu dữ liệu hàm được thực hiện một cách nhất quán và đáng tin cậy trong ứng dụng của bạn.
