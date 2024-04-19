# Hướng dẫn sử dụng hàm `capitalizeFirstLetter`

Hàm `capitalizeFirstLetter` cho phép bạn viết hoa chữ cái đầu tiên của một chuỗi. Nó cũng có tùy chọn để chuyển phần còn lại của chuỗi thành chữ thường.

## Cách sử dụng

Để sử dụng hàm `capitalizeFirstLetter`, bạn cần truyền vào một chuỗi và một tham số tùy chọn `restToLower`.

```javascript
const capitalizedString = capitalizeFirstLetter(inputString, restToLower);
```

- `inputString` (bắt buộc): Chuỗi cần viết hoa chữ cái đầu tiên.
- `restToLower` (tùy chọn, mặc định là `false`): Nếu `true`, phần còn lại của chuỗi sẽ được chuyển thành chữ thường.

### Ví dụ

```javascript
console.log(capitalizeFirstLetter('hello')); // Output: 'Hello'
console.log(capitalizeFirstLetter('hELLO', true)); // Output: 'Hello'
console.log(capitalizeFirstLetter('123hello')); // Output: '123hello'
console.log(capitalizeFirstLetter('')); // Output: ''
```

## Xử lý lỗi

Nếu đầu vào không phải là một chuỗi, hàm sẽ trả về chuỗi `'Input must be a string'`.

```javascript
console.log(capitalizeFirstLetter(123)); // Output: 'Input must be a string'
```

## Lưu ý

- Hàm sử dụng phương thức `toUpperCase()` để viết hoa chữ cái đầu tiên và `toLowerCase()` để chuyển phần còn lại thành chữ thường (nếu `restToLower` là `true`).
- Nếu chuỗi đầu vào rỗng, hàm sẽ trả về chuỗi rỗng.
- Hàm sử dụng destructuring assignment để tách chuỗi đầu vào thành chữ cái đầu tiên và phần còn lại.

Bạn có thể sử dụng hàm `capitalizeFirstLetter` trong các trường hợp cần viết hoa chữ cái đầu tiên của một chuỗi, ví dụ như khi hiển thị tên người dùng, tiêu đề bài viết, v.v.