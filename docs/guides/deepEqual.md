Hàm `deepEqual` sử dụng phương thức `isEqual` từ thư viện Lodash:

# Hướng dẫn sử dụng hàm `deepEqual`

Hàm `deepEqual` là một hàm trong JavaScript được thiết kế để so sánh sâu giữa hai giá trị bất kỳ, có thể là đối tượng, mảng, hoặc các kiểu dữ liệu nguyên thủy khác. Hàm này sử dụng phương thức `isEqual` từ thư viện Lodash để kiểm tra xem hai giá trị có bằng nhau không chỉ về giá trị bề mặt mà còn về cấu trúc và nội dung bên trong.

## Cách sử dụng

Để sử dụng hàm `deepEqual`, bạn cần truyền vào hai đối số mà bạn muốn so sánh. Hàm sẽ trả về `true` nếu hai đối số là bằng nhau theo nghĩa sâu sắc, và `false` nếu chúng khác nhau.

```javascript
const deepEqual = require('hoa-utils');

const object1 = {
  name: 'Alice',
  attributes: {
    height: 150,
    hobbies: ['reading', 'gaming'],
  },
};

const object2 = {
  name: 'Alice',
  attributes: {
    height: 150,
    hobbies: ['reading', 'gaming'],
  },
};

console.log(deepEqual(object1, object2)); // Output: true
```

## Cách hoạt động của hàm `deepEqual`

Hàm `deepEqual` sử dụng phương thức `isEqual` từ thư viện Lodash để thực hiện so sánh sâu giữa hai giá trị. Phương thức `isEqual` của Lodash có các đặc điểm sau:

1. **So sánh sâu**: Phương thức này thực hiện so sánh sâu, có nghĩa là nó so sánh tất cả các thuộc tính lồng nhau bên trong các đối tượng.

2. **Xử lý các trường hợp đặc biệt**: `isEqual` xử lý các trường hợp đặc biệt như `NaN`, `+0/-0`, `Date`, `RegExp`, `Map`, `Set`, v.v. một cách chính xác.

3. **Tránh vòng lặp vô hạn**: Nó an toàn với các đối tượng có tham chiếu tuần hoàn bằng cách sử dụng bộ nhớ đệm.

4. **So sánh mảng và đối tượng**: Nó có thể so sánh các mảng và đối tượng phức tạp.

## Lưu ý

- Phương thức `isEqual` của Lodash hỗ trợ so sánh các đối tượng `Function`, `Symbol`, `Date`, `RegExp`, vì vậy hàm `deepEqual` cũng hỗ trợ các trường hợp này.
- Hàm `deepEqual` sử dụng `isEqual` để xử lý các đối tượng có thể gây ra vòng lặp tham chiếu vô hạn một cách an toàn.

Bằng cách sử dụng phương thức `isEqual` từ thư viện Lodash, hàm `deepEqual` trở nên mạnh mẽ hơn và có thể xử lý nhiều trường hợp phức tạp hơn khi so sánh sâu các đối tượng và giá trị khác nhau.
