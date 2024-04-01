# Bắt Đầu Nhanh với hoa-utils

Thư viện `hoa-utils` cung cấp một loạt các hàm tiện ích để giúp bạn xử lý các tác vụ phổ biến trong lập trình JavaScript. Dưới đây là cách bạn có thể nhanh chóng bắt đầu sử dụng thư viện này trong dự án của mình.

## Cài Đặt

Đầu tiên, cài đặt thư viện thông qua npm:

```bash
npm install hoa-utils
```

Hoặc nếu bạn sử dụng yarn, sử dụng lệnh sau:

```bash
yarn add hoa-utils
```

## Sử Dụng Các Hàm Tiện Ích

Sau khi cài đặt, bạn có thể import các hàm từ `hoa-utils` và bắt đầu sử dụng chúng.

### So Sánh Hai Đối Tượng

```javascript
const { compareObject } = require('hoa-utils');

const object1 = { name: 'Alice', age: 25 };
const object2 = { name: 'Alice', age: 25 };

console.log(compareObject(object1, object2)); // Output: true
```

### Tạo Bản Sao Của Đối Tượng

```javascript
const { cloneObject } = require('hoa-utils');

const originalObject = { name: 'Alice', age: 25 };
const clonedObject = cloneObject(originalObject);

console.log(clonedObject); // Output: { name: 'Alice', age: 25 }
```

### Tạo Keyed Storage

```javascript
const { createKeyedStorage } = require('hoa-utils');

const storage = createKeyedStorage('myUniqueKey');
storage.setItem('userInfo', { name: 'Alice', age: 25 });
const userInfo = storage.getItem('userInfo');

console.log(userInfo); // Output: { name: 'Alice', age: 25 }
```
