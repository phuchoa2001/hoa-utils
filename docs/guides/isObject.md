# Hướng dẫn sử dụng hàm `isObject`

Hàm `isObject` trong thư viện hoa-utils cho phép bạn kiểm tra xem một giá trị có phải là một object hay không. Hàm này cũng được import trực tiếp từ thư viện Lodash.

## Cách sử dụng

Để sử dụng hàm `isObject`, bạn cần import nó từ thư viện hoa-utils:

```javascript
const { isObject } = require('hoa-utils');
```

Sau đó, bạn có thể truyền bất kỳ giá trị nào vào hàm `isObject`. Hàm này sẽ trả về `true` nếu giá trị đó là một object (bao gồm cả mảng), ngược lại sẽ trả về `false`.

```javascript
const { isObject } = require('hoa-utils');

const obj = { a: 1, b: 2 };
const arr = [1, 2, 3];
const str = 'hello';
const num = 42;
const nullValue = null;

console.log(isObject(obj)); // Output: true
console.log(isObject(arr)); // Output: true
console.log(isObject(str)); // Output: false
console.log(isObject(num)); // Output: false
console.log(isObject(nullValue)); // Output: false
```

Trong ví dụ trên, `isObject({ a: 1, b: 2 })` và `isObject([1][2][3])` sẽ trả về `true` vì cả hai đều là object (mảng cũng được coi là một object trong JavaScript). Các giá trị khác như `'hello'`, `42`, và `null` không phải là object, nên `isObject` sẽ trả về `false`.

## Lưu ý

- Hàm `isObject` từ hoa-utils được import trực tiếp từ Lodash, vì vậy nó hoạt động giống với cách kiểm tra kiểu dữ liệu object trong JavaScript, nhưng cung cấp một cách nhất quán để kiểm tra kiểu dữ liệu trên nhiều môi trường và phiên bản khác nhau của JavaScript.
- Lưu ý rằng trong JavaScript, mảng cũng được coi là một object, nên `isObject` sẽ trả về `true` cho cả mảng và object.

Bằng cách sử dụng hàm `isObject` từ hoa-utils, bạn có thể đảm bảo rằng việc kiểm tra kiểu dữ liệu object (bao gồm cả mảng) được thực hiện một cách nhất quán và đáng tin cậy trong ứng dụng của bạn.
