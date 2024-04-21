# Hướng dẫn sử dụng hàm `isPlainObject`

Hàm `isPlainObject` trong thư viện hoa-utils cho phép bạn kiểm tra xem một giá trị có phải là một object thuần túy hay không. Một object thuần túy là một object được tạo ra bởi constructor `Object` hoặc có `[[Prototype]]` là `null`. Hàm này cũng được import trực tiếp từ thư viện Lodash.

## Cách sử dụng

Để sử dụng hàm `isPlainObject`, bạn cần import nó từ thư viện hoa-utils:

```javascript
const { isPlainObject } = require('hoa-utils');
```

Sau đó, bạn có thể truyền bất kỳ giá trị nào vào hàm `isPlainObject`. Hàm này sẽ trả về `true` nếu giá trị đó là một object thuần túy, ngược lại sẽ trả về `false`.

```javascript
const { isPlainObject } = require('hoa-utils');

const plainObj = { a: 1, b: 2 };
const objectWithProto = Object.create({ x: 1 });
const arrayObj = [1, 2, 3];
const func = function () {};
const date = new Date();

console.log(isPlainObject(plainObj)); // Output: true
console.log(isPlainObject(objectWithProto)); // Output: false
console.log(isPlainObject(arrayObj)); // Output: false
console.log(isPlainObject(func)); // Output: false
console.log(isPlainObject(date)); // Output: false
```

Trong ví dụ trên, `isPlainObject({ a: 1, b: 2 })` sẽ trả về `true` vì `{ a: 1, b: 2 }` là một object thuần túy. Các giá trị khác như `Object.create({ x: 1 })`, `[1][2][3]`, `function() {}`, và `new Date()` không phải là object thuần túy, nên `isPlainObject` sẽ trả về `false`.

## Lưu ý

- Hàm `isPlainObject` từ hoa-utils được import trực tiếp từ Lodash, vì vậy nó hoạt động giống với cách kiểm tra object thuần túy trong Lodash, nhưng cung cấp một cách nhất quán để kiểm tra kiểu dữ liệu trên nhiều môi trường và phiên bản khác nhau của JavaScript.
- Nếu bạn chỉ cần sử dụng hàm `isPlainObject`, bạn có thể import nó riêng lẻ từ hoa-utils

Bằng cách sử dụng hàm `isPlainObject` từ hoa-utils, bạn có thể đảm bảo rằng việc kiểm tra kiểu dữ liệu object thuần túy được thực hiện một cách nhất quán và đáng tin cậy trong ứng dụng của bạn.
