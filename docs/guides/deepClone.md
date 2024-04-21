Hàm `deepClone` sử dụng phương thức `cloneDeep` từ thư viện Lodash:

# Hướng dẫn sử dụng hàm `deepClone`

Hàm `deepClone` là một hàm trong JavaScript được thiết kế để tạo một bản sao sâu của đối tượng hoặc giá trị đã cho. Hàm này sử dụng phương thức `cloneDeep` từ thư viện Lodash để đảm bảo rằng bản sao là một thực thể hoàn toàn độc lập, không chia sẻ tham chiếu với đối tượng hoặc giá trị gốc.

## Cách sử dụng

Để sử dụng hàm `deepClone`, bạn cần truyền vào đối tượng hoặc giá trị mà bạn muốn tạo bản sao sâu. Hàm sẽ trả về một bản sao sâu của đối tượng hoặc giá trị đã cho.

```javascript
const deepClone = require('hoa-utils');

const object = {
  name: 'Alice',
  attributes: {
    height: 150,
    hobbies: ['reading', 'gaming'],
  },
};

const clonedObject = deepClone(object);

console.log(clonedObject);
// Output: { name: 'Alice', attributes: { height: 150, hobbies: ['reading', 'gaming'] } }

clonedObject.attributes.height = 160;

console.log(object.attributes.height); // Output: 150
console.log(clonedObject.attributes.height); // Output: 160
```

## Cách hoạt động của hàm `deepClone`

Hàm `deepClone` sử dụng phương thức `cloneDeep` từ thư viện Lodash để tạo một bản sao sâu của đối tượng hoặc giá trị đã cho. Phương thức `cloneDeep` của Lodash có các đặc điểm sau:

1. **Sao chép sâu**: Phương thức này thực hiện sao chép sâu, có nghĩa là nó sao chép tất cả các thuộc tính lồng nhau bên trong các đối tượng.

2. **Xử lý các trường hợp đặc biệt**: `cloneDeep` xử lý các trường hợp đặc biệt như `Date`, `RegExp`, `Map`, `Set`, v.v. bằng cách tạo ra một thể hiện mới của chúng với các giá trị tương ứng.

3. **Tránh vòng lặp vô hạn**: Nó an toàn với các đối tượng có tham chiếu tuần hoàn bằng cách sử dụng bộ nhớ đệm.

4. **Sao chép mảng và đối tượng**: Nó có thể sao chép các mảng và đối tượng phức tạp.

## Lưu ý

- Phương thức `cloneDeep` của Lodash hỗ trợ sao chép các đối tượng `Function`, `Symbol`, `Date`, `RegExp`, vì vậy hàm `deepClone` cũng hỗ trợ các trường hợp này.
- Hàm `deepClone` sử dụng `cloneDeep` để xử lý các đối tượng có thể gây ra vòng lặp tham chiếu vô hạn một cách an toàn.

Bằng cách sử dụng phương thức `cloneDeep` từ thư viện Lodash, hàm `deepClone` trở nên mạnh mẽ hơn và có thể xử lý nhiều trường hợp phức tạp hơn khi tạo bản sao sâu của các đối tượng và giá trị khác nhau.
