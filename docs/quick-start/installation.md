# Cài đặt

Thư viện `hoa-utils` cung cấp các hàm tiện ích giúp bạn xử lý các tác vụ phổ biến trong lập trình JavaScript. Để sử dụng thư viện này, bạn cần cài đặt nó thông qua npm hoặc yarn.

## Yêu Cầu Hệ Thống

Trước khi cài đặt `hoa-utils`, đảm bảo rằng bạn có:

- Node.js phiên bản mới nhất được cài đặt trên máy của bạn.
- npm (được cài đặt cùng với Node.js) hoặc yarn để quản lý các gói phụ thuộc.

## Cài đặt thông qua npm

Chạy lệnh sau trong terminal để cài đặt `hoa-utils` vào dự án của bạn:

```bash
npm install hoa-utils
```

## Cài đặt thông qua yarn

Nếu bạn sử dụng yarn, chạy lệnh sau:

```bash
yarn add hoa-utils
```

## Kiểm tra Cài đặt

Sau khi cài đặt, bạn có thể kiểm tra xem `hoa-utils` đã được thêm vào `node_modules` của dự án và được liệt kê trong file `package.json` dưới `dependencies`.

## Bắt đầu Sử Dụng

Sau khi cài đặt, bạn có thể `require` các hàm từ `hoa-utils` và sử dụng chúng trong dự án của bạn. Ví dụ:

```javascript
const { compareObject } = require('hoa-utils');

const obj1 = { name: 'Alice', age: 25 };
const obj2 = { name: 'Alice', age: 25 };

const areObjectsEqual = compareObject(obj1, obj2);
console.log(areObjectsEqual); // Output: true
```