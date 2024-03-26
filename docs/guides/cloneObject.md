```markdown
# Hướng dẫn sử dụng hàm `cloneObject`

Hàm `cloneObject` trong thư viện `hoa-utils` cho phép bạn tạo một bản sao sâu của một đối tượng JavaScript. Bản sao này sẽ là một thực thể độc lập không chia sẻ tham chiếu với đối tượng gốc.

## Cách sử dụng

Để tạo một bản sao của đối tượng, bạn chỉ cần truyền đối tượng đó vào hàm `cloneObject`.

```javascript
const { cloneObject } = require('hoa-utils');

const originalObject = {
  name: 'Alice',
  age: 25,
  contact: {
    email: 'alice@example.com',
    phone: '123-456-7890'
  }
};

const clonedObject = cloneObject(originalObject);
console.log(clonedObject); // Output: bản sao của originalObject
console.log(clonedObject === originalObject); // Output: false
```

Hàm `cloneObject` sẽ trả về một bản sao mới của đối tượng ban đầu. Bản sao này có thể được thay đổi mà không ảnh hưởng đến đối tượng gốc.

## Lưu ý

- Hàm `cloneObject` sẽ sao chép tất cả các thuộc tính có thể serialize được của đối tượng. Các thuộc tính không thể serialize (như hàm, `Symbol`, `Date`, `RegExp`) có thể không được sao chép chính xác hoặc không được sao chép.
- Đối với các đối tượng có tham chiếu đệ quy, hàm `cloneObject` có thể không hoạt động như mong đợi và cần phải được xử lý cẩn thận để tránh lỗi.
```

Đảm bảo rằng bạn đã tạo thư mục `docs/guides` trong dự án của mình và lưu hai file này với tên `compareObject.md` và `cloneObject.md` tương ứng. Sau đó, bạn có thể tham chiếu đến các file này trong file README.md của mình để người dùng có thể truy cập hướng dẫn sử dụng.