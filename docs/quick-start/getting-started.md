```markdown
# Bắt Đầu Sử Dụng hoa-utils

hoa-utils là một thư viện tiện ích JavaScript cung cấp các hàm hữu ích để xử lý các tác vụ phổ biến trong lập trình.

## Cài Đặt

Để sử dụng hoa-utils trong dự án của bạn, cài đặt thư viện thông qua npm:

```bash
npm install hoa-utils
```

## Các Hàm Cơ Bản

Thư viện hoa-utils cung cấp các hàm sau:

- `compareObject`: So sánh hai đối tượng JavaScript.
- `cloneObject`: Tạo một bản sao của đối tượng.
- `createKeyedStorage`: Tạo một storage có key để lưu trữ dữ liệu.

## Ví Dụ Sử Dụng

### So Sánh Đối Tượng

```javascript
const { compareObject } = require('hoa-utils');

const obj1 = { name: 'Alice', age: 25 };
const obj2 = { name: 'Alice', age: 25 };

console.log(compareObject(obj1, obj2)); // Output: true
```

### Tạo Bản Sao Đối Tượng

```javascript
const { cloneObject } = require('hoa-utils');

const originalObject = { name: 'Alice', age: 25 };
const clonedObject = cloneObject(originalObject);

console.log(clonedObject); // Output: { name: 'Alice', age: 25 }
```

### Sử Dụng Keyed Storage

```javascript
const { createKeyedStorage } = require('hoa-utils');

const storage = createKeyedStorage('myApp');
storage.setItem('user', { name: 'Alice', age: 25 });
const user = storage.getItem('user');

console.log(user); // Output: { name: 'Alice', age: 25 }
```

## Thêm Thông Tin

Để biết thêm thông tin và tài liệu chi tiết hơn, hãy truy cập [trang npm của hoa-utils](https://www.npmjs.com/package/hoa-utils).