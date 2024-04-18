# Hướng dẫn sử dụng hàm `typeCheck`

Hàm `typeCheck` trong thư viện `hoa-utils` được sử dụng để lấy kiểu dữ liệu chính xác của một giá trị trong JavaScript. Nó sử dụng phương thức `Object.prototype.toString` để xác định kiểu dữ liệu.

## Cách sử dụng

Để sử dụng hàm `typeCheck`, bạn chỉ cần truyền giá trị cần kiểm tra kiểu dữ liệu làm tham số.

```javascript
const { typeCheck } = require('hoa-utils');

const result = typeCheck(value);
```

- `value`: Giá trị cần kiểm tra kiểu dữ liệu.

Hàm `typeCheck` sẽ trả về một chuỗi biểu thị kiểu dữ liệu của `value`.

## Ví dụ sử dụng

```javascript
const { typeCheck } = require('hoa-utils');

console.log(typeCheck([])); // 'array'
console.log(typeCheck({})); // 'object'
console.log(typeCheck(null)); // 'null'
console.log(typeCheck(undefined)); // 'undefined'
console.log(typeCheck(42)); // 'number'
console.log(typeCheck('hello')); // 'string'
console.log(typeCheck(true)); // 'boolean'
console.log(typeCheck(/pattern/)); // 'regexp'
console.log(typeCheck(new Date())); // 'date'
console.log(typeCheck(Symbol('foo'))); // 'symbol'
```

Hàm `typeCheck` hoạt động bằng cách gọi `Object.prototype.toString` trên giá trị đầu vào. Kết quả trả về sẽ là một chuỗi có dạng `"[object Type]"`, trong đó `Type` là kiểu dữ liệu thực tế. Hàm sẽ cắt chuỗi để lấy phần `Type`, chuyển đổi thành chữ thường và trả về.

## Lưu ý

- Hàm `typeCheck` là một hàm hữu ích để kiểm tra kiểu dữ liệu trong JavaScript, đặc biệt khi làm việc với các giá trị không nguyên thủy như `Set`, `Map`, `Date`, v.v.
- Nó giúp bạn xác định chính xác kiểu dữ liệu của một giá trị, điều này rất quan trọng trong việc xử lý logic và debug ứng dụng.
- Hàm `typeCheck` cũng được tối ưu để trả về kết quả chính xác, đảm bảo tính nhất quán và tin cậy trong quá trình phát triển ứng dụng.
- Với `hoa-utils`, bạn có thể dễ dàng sử dụng hàm `typeCheck` bằng cách import nó vào dự án của mình, giúp tiết kiệm thời gian và nâng cao hiệu suất phát triển.
