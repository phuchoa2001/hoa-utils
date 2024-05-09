# Hướng dẫn sử dụng hàm `truncateString`

Hàm `truncateString` được sử dụng để cắt ngắn một chuỗi ký tự và thêm một ký tự đại diện vào cuối chuỗi nếu chuỗi đó quá dài so với độ dài tối đa cho phép.

## Cách sử dụng

Để sử dụng hàm `truncateString`, bạn cần truyền vào ba tham số:

1. `str` (bắt buộc): Chuỗi ký tự cần cắt ngắn.
2. `maxLength` (tùy chọn, mặc định là 0): Độ dài tối đa cho phép của chuỗi. Nếu `maxLength` là 0, hàm sẽ trả về chuỗi gốc.
3. `ending` (tùy chọn, mặc định là `'...'`): Ký tự đại diện cho phần bị cắt ngắn của chuỗi.

```javascript
const truncatedString = truncateString(originalString, maxLength, ending);
```

## Ví dụ

Cắt ngắn chuỗi với độ dài tối đa là 10 ký tự và sử dụng ký tự đại diện mặc định `'...'`:

```javascript
const originalString = 'Đây là một chuỗi ký tự dài';
const truncatedString = truncateString(originalString, 10);
console.log(truncatedString); // Output: 'Đây là m...'
```

Cắt ngắn chuỗi với độ dài tối đa là 15 ký tự và sử dụng ký tự đại diện tùy chỉnh `'---'`:

```javascript
const originalString = 'Đây là một chuỗi ký tự dài';
const truncatedString = truncateString(originalString, 15, '---');
console.log(truncatedString); // Output: 'Đây là một chu---'
```

Nếu chuỗi gốc có độ dài nhỏ hơn hoặc bằng `maxLength`, hàm sẽ trả về chuỗi gốc:

```javascript
const originalString = 'Chuỗi ngắn';
const truncatedString = truncateString(originalString, 20);
console.log(truncatedString); // Output: 'Chuỗi ngắn'
```

## Lưu ý

- Hàm `truncateString` sử dụng hai hàm hỗ trợ `isString` và `isNumber` để kiểm tra kiểu dữ liệu của các tham số `str`, `maxLength` và `ending`. Nếu kiểu dữ liệu không đúng, hàm sẽ trả về một thông báo lỗi tương ứng.
- Nếu `maxLength` là 0 hoặc chuỗi gốc có độ dài nhỏ hơn hoặc bằng `maxLength`, hàm sẽ trả về chuỗi gốc.
- Hàm sử dụng phương thức `slice` để cắt chuỗi gốc tại vị trí `maxLength - ending.length` để dành chỗ cho ký tự đại diện.

Hàm `truncateString` cung cấp một cách đơn giản và linh hoạt để cắt ngắn chuỗi ký tự và thêm ký tự đại diện vào cuối chuỗi nếu cần thiết. Bạn có thể tùy chỉnh độ dài tối đa và ký tự đại diện theo nhu cầu của mình.
