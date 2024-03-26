# Hướng dẫn sử dụng hàm `compareObject`

Hàm `compareObject` trong thư viện `hoa-utils` được sử dụng để so sánh sâu giữa hai đối tượng JavaScript. Hàm này kiểm tra xem hai đối tượng có bằng nhau về cấu trúc và giá trị hay không.

## Cách sử dụng

Để so sánh hai đối tượng, bạn cần truyền chúng như là tham số vào hàm `compareObject`.

```javascript
const { compareObject } = require('hoa-utils');

const object1 = {
  name: 'John',
  age: 30
};

const object2 = {
  name: 'John',
  age: 30
};

const areEqual = compareObject(object1, object2);
console.log(areEqual); // Output: true
```

Hàm `compareObject` sẽ trả về `true` nếu hai đối tượng giống hệt nhau về cấu trúc và giá trị, và `false` nếu chúng khác nhau.

## Lưu ý

- Hàm `compareObject` chỉ so sánh các thuộc tính có thể serialize được. Các thuộc tính như hàm, `Symbol`, hoặc các đối tượng đặc biệt như `Date`, `RegExp` có thể không được so sánh chính xác.
- Nếu một trong hai tham số không phải là đối tượng, hàm sẽ không hoạt động như mong đợi và có thể trả về `false`.