# Hướng dẫn sử dụng hàm `isNull`

Hàm `isNull` trong thư viện hoa-utils cho phép bạn kiểm tra xem một giá trị có phải là `null` hay không. Hàm này được import trực tiếp từ thư viện Lodash.

## Cách sử dụng

Để sử dụng hàm `isNull`, bạn cần import nó từ thư viện hoa-utils:

```javascript
const { isNull } = require('hoa-utils');
```

Sau đó, bạn có thể truyền bất kỳ giá trị nào vào hàm `isNull`. Hàm này sẽ trả về `true` nếu giá trị đó là `null`, ngược lại sẽ trả về `false`.

```javascript
const { isNull } = require('hoa-utils');

const nullValue = null;
const undefinedValue = undefined;
const num = 42;
const str = 'hello';
const obj = { a: 1 };

console.log(isNull(nullValue)); // Output: true
console.log(isNull(undefinedValue)); // Output: false
console.log(isNull(num)); // Output: false
console.log(isNull(str)); // Output: false
console.log(isNull(obj)); // Output: false
```

Trong ví dụ trên, `isNull(null)` sẽ trả về `true` vì `null` là giá trị `null`. Các giá trị khác như `undefined`, `42`, `'hello'`, và `{ a: 1 }` không phải là `null`, nên `isNull` sẽ trả về `false`.

## Lưu ý

- Hàm `isNull` từ hoa-utils được import trực tiếp từ Lodash, vì vậy nó hoạt động giống với cách kiểm tra giá trị `null` trong JavaScript, nhưng cung cấp một cách nhất quán để kiểm tra kiểu dữ liệu trên nhiều môi trường và phiên bản khác nhau của JavaScript.
- Lưu ý rằng `isNull` chỉ kiểm tra giá trị `null`, không kiểm tra `undefined` hay các giá trị khác.

Bằng cách sử dụng hàm `isNull` từ hoa-utils, bạn có thể đảm bảo rằng việc kiểm tra giá trị `null` được thực hiện một cách nhất quán và đáng tin cậy trong ứng dụng của bạn.
