# Hướng dẫn sử dụng hàm `isArray`

Hàm `isArray` trong thư viện hoa-utils cho phép bạn kiểm tra xem một giá trị có phải là một mảng hay không. Hàm này được import trực tiếp từ thư viện Lodash.

## Cách sử dụng

Để sử dụng hàm `isArray`, bạn cần import nó từ thư viện hoa-utils:

```javascript
const { isArray } = require('hoa-utils');
```

Sau đó, bạn có thể truyền bất kỳ giá trị nào vào hàm `isArray`. Hàm này sẽ trả về `true` nếu giá trị đó là một mảng, ngược lại sẽ trả về `false`.

```javascript
const { isArray } = require('hoa-utils');

const arr = [1, 2, 3];
const obj = { a: 1, b: 2 };
const str = 'hello';
const num = 42;

console.log(isArray(arr)); // Output: true
console.log(isArray(obj)); // Output: false
console.log(isArray(str)); // Output: false
console.log(isArray(num)); // Output: false
```

Trong ví dụ trên, `isArray([1][2][3])` sẽ trả về `true` vì `[1][2][3]` là một mảng. Các giá trị khác như `{ a: 1, b: 2 }`, `'hello'`, và `42` không phải là mảng, nên `isArray` sẽ trả về `false`.

## Lưu ý

- Hàm `isArray` từ hoa-utils được import trực tiếp từ Lodash, vì vậy nó hoạt động giống với phương thức `Array.isArray()` trong JavaScript, nhưng cung cấp một cách nhất quán để kiểm tra kiểu dữ liệu trên nhiều môi trường và phiên bản khác nhau của JavaScript.

Bằng cách sử dụng hàm `isArray` từ hoa-utils, bạn có thể đảm bảo rằng việc kiểm tra kiểu dữ liệu mảng được thực hiện một cách nhất quán và đáng tin cậy trong ứng dụng của bạn.
