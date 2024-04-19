# Hướng dẫn sử dụng hàm `deepEqual`

Hàm `deepEqual` là một hàm trong JavaScript được thiết kế để so sánh sâu giữa hai giá trị bất kỳ, có thể là đối tượng, mảng, hoặc các kiểu dữ liệu nguyên thủy khác. Hàm này kiểm tra xem hai giá trị có bằng nhau không chỉ về giá trị bề mặt mà còn về cấu trúc và nội dung bên trong.

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

1. **Kiểm tra bằng nhau nghiêm ngặt (`===`)**: Nếu hai giá trị có cùng tham chiếu, hàm trả về `true`.

2. **Kiểm tra kiểu dữ liệu**: Nếu một trong hai giá trị không phải là `Object`, hàm trả về `false`.

3. **So sánh constructor**: Nếu hai giá trị có các constructor khác nhau, hàm trả về `false`.

4. **So sánh thuộc tính**: Hàm lặp qua mỗi thuộc tính của đối tượng thứ nhất và kiểm tra xem thuộc tính đó có tồn tại trong đối tượng thứ hai hay không, và ngược lại.

5. **So sánh giá trị thuộc tính**: Nếu giá trị của thuộc tính là kiểu dữ liệu nguyên thủy, chúng phải bằng nhau nghiêm ngặt. Nếu giá trị là đối tượng hoặc mảng, hàm sẽ gọi đệ quy `deepEqual` để so sánh sâu hơn.

## Lưu ý

- Hàm `deepEqual` không so sánh các thuộc tính không thể serialize được như `Function`, `Symbol`, `Date`, `RegExp`.
- Hàm này không xử lý các đối tượng có thể gây ra vòng lặp tham chiếu vô hạn.

Hàm `deepEqual` là một công cụ hữu ích khi bạn cần thực hiện so sánh phức tạp giữa các đối tượng có cấu trúc phức tạp và lồng nhau, đảm bảo rằng mọi khía cạnh của đối tượng đều được so sánh một cách chính xác
