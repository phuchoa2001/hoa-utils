# Hướng dẫn sử dụng hàm `isObjectLike`

Hàm `isObjectLike` trong thư viện hoa-utils cho phép bạn kiểm tra xem một giá trị có giống như một object hay không. Hàm này cũng được import trực tiếp từ thư viện Lodash.

## Cách sử dụng

Để sử dụng hàm `isObjectLike`, bạn cần import nó từ thư viện hoa-utils:

```javascript
const { isObjectLike } = require('hoa-utils');
```

Sau đó, bạn có thể truyền bất kỳ giá trị nào vào hàm `isObjectLike`. Hàm này sẽ trả về `true` nếu giá trị đó giống như một object, nghĩa là không phải `null` và có kiểu dữ liệu là `object`.

```javascript
const { isObjectLike } = require('hoa-utils');

const obj = { a: 1, b: 2 };
const arr = [1, 2, 3];
const str = 'hello';
const num = 42;
const nullValue = null;

console.log(isObjectLike(obj)); // Output: true
console.log(isObjectLike(arr)); // Output: true
console.log(isObjectLike(str)); // Output: false
console.log(isObjectLike(num)); // Output: false
console.log(isObjectLike(nullValue)); // Output: false
```

Trong ví dụ trên, `isObjectLike({ a: 1, b: 2 })` và `isObjectLike([1][2][3])` sẽ trả về `true` vì cả hai đều giống như một object. Các giá trị khác như `'hello'`, `42`, và `null` không giống như object, nên `isObjectLike` sẽ trả về `false`.

## Lưu ý

- Hàm `isObjectLike` từ hoa-utils được import trực tiếp từ Lodash, vì vậy nó hoạt động giống với cách kiểm tra kiểu dữ liệu object-like trong Lodash, nhưng cung cấp một cách nhất quán để kiểm tra kiểu dữ liệu trên nhiều môi trường và phiên bản khác nhau của JavaScript.
- Lưu ý rằng `isObjectLike` sẽ trả về `true` cho cả mảng và object, vì cả hai đều có kiểu dữ liệu là `object` và khác `null`.

Bằng cách sử dụng hàm `isObjectLike` từ hoa-utils, bạn có thể đảm bảo rằng việc kiểm tra kiểu dữ liệu object-like (bao gồm cả mảng và object) được thực hiện một cách nhất quán và đáng tin cậy trong ứng dụng của bạn.
