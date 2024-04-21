# Hướng dẫn sử dụng hàm `isBoolean`

Hàm `isBoolean` trong thư viện hoa-utils cho phép bạn kiểm tra xem một giá trị có phải là một giá trị boolean (true hoặc false) hay không. Hàm này được import trực tiếp từ thư viện Lodash.

## Cách sử dụng

Để sử dụng hàm `isBoolean`, bạn cần import nó từ thư viện hoa-utils:

```javascript
const { isBoolean } = require('hoa-utils');
```

Sau đó, bạn có thể truyền bất kỳ giá trị nào vào hàm `isBoolean`. Hàm này sẽ trả về `true` nếu giá trị đó là `true` hoặc `false`, ngược lại sẽ trả về `false`.

```javascript
const { isBoolean } = require('hoa-utils');

const boolTrue = true;
const boolFalse = false;
const num = 42;
const str = 'hello';
const obj = { a: 1 };
const arr = [1, 2, 3];
const nullValue = null;

console.log(isBoolean(boolTrue)); // Output: true
console.log(isBoolean(boolFalse)); // Output: true
console.log(isBoolean(num)); // Output: false
console.log(isBoolean(str)); // Output: false
console.log(isBoolean(obj)); // Output: false
console.log(isBoolean(arr)); // Output: false
console.log(isBoolean(nullValue)); // Output: false
```

Trong ví dụ trên, `isBoolean(true)` và `isBoolean(false)` sẽ trả về `true` vì cả hai đều là giá trị boolean. Các giá trị khác như `42`, `'hello'`, `{ a: 1 }`, `[1]`, và `null` không phải là giá trị boolean, nên `isBoolean` sẽ trả về `false`.

## Lưu ý

- Hàm `isBoolean` từ hoa-utils được import trực tiếp từ Lodash, vì vậy nó hoạt động giống với cách kiểm tra kiểu dữ liệu boolean trong JavaScript, nhưng cung cấp một cách nhất quán để kiểm tra kiểu dữ liệu trên nhiều môi trường và phiên bản khác nhau của JavaScript.

Bằng cách sử dụng hàm `isBoolean` từ hoa-utils, bạn có thể đảm bảo rằng việc kiểm tra kiểu dữ liệu boolean được thực hiện một cách nhất quán và đáng tin cậy trong ứng dụng của bạn.
