# Hướng dẫn sử dụng hàm `isNumber`

Hàm `isNumber` trong thư viện hoa-utils cho phép bạn kiểm tra xem một giá trị có phải là một số (number) hay không. Hàm này được import trực tiếp từ thư viện Lodash.

## Cách sử dụng

Để sử dụng hàm `isNumber`, bạn cần import nó từ thư viện hoa-utils:

```javascript
const { isNumber } = require('hoa-utils');
```

Sau đó, bạn có thể truyền bất kỳ giá trị nào vào hàm `isNumber`. Hàm này sẽ trả về `true` nếu giá trị đó là một số, ngược lại sẽ trả về `false`.

```javascript
const { isNumber } = require('hoa-utils');

const num = 42;
const str = 'hello';
const obj = { a: 1 };
const arr = [1, 2, 3];
const nullValue = null;
const nanValue = NaN;

console.log(isNumber(num)); // Output: true
console.log(isNumber(str)); // Output: false
console.log(isNumber(obj)); // Output: false
console.log(isNumber(arr)); // Output: false
console.log(isNumber(nullValue)); // Output: false
console.log(isNumber(nanValue)); // Output: true
```

Trong ví dụ trên, `isNumber(42)` và `isNumber(NaN)` sẽ trả về `true` vì cả hai đều là số. Các giá trị khác như `'hello'`, `{ a: 1 }`, `[1]`, và `null` không phải là số, nên `isNumber` sẽ trả về `false`.

## Lưu ý

- Hàm `isNumber` từ hoa-utils được import trực tiếp từ Lodash, vì vậy nó hoạt động giống với cách kiểm tra kiểu dữ liệu số trong JavaScript, nhưng cung cấp một cách nhất quán để kiểm tra kiểu dữ liệu trên nhiều môi trường và phiên bản khác nhau của JavaScript.
- Lưu ý rằng `isNumber` sẽ trả về `true` cho cả `NaN` vì `NaN` cũng được coi là một số trong JavaScript.

Bằng cách sử dụng hàm `isNumber` từ hoa-utils, bạn có thể đảm bảo rằng việc kiểm tra kiểu dữ liệu số được thực hiện một cách nhất quán và đáng tin cậy trong ứng dụng của bạn.
