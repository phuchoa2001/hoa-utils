## Giới Thiệu

`hoa-utils` là một thư viện tiện ích JavaScript được thiết kế để cung cấp các hàm hữu ích cho việc phát triển phần mềm. Thư viện này bao gồm hàm `compareObject`, một công cụ mạnh mẽ cho việc so sánh sâu (deep equality) giữa hai đối tượng. Hàm này đảm bảo rằng hai đối tượng không chỉ giống nhau về bề mặt mà còn giống nhau về cấu trúc và nội dung, ngay cả khi chúng không phải là cùng một instance trong bộ nhớ.

## Bảng Tính Năng Hàm

| Tên Hàm         | Tính Năng                                                                                     |
|-----------------|------------------------------------------------------------------------------------------------|
| `compareObject` | So sánh sâu giữa hai đối tượng để kiểm tra sự bằng nhau về cấu trúc và giá trị. Nếu một trong hai tham số không phải là đối tượng, hàm sẽ không hoạt động như mong muốn. |

## Cách Sử Dụng

Để sử dụng hàm `compareObject` từ thư viện `hoa-utils`, bạn cần truyền vào hai đối tượng mà bạn muốn so sánh. Dưới đây là một ví dụ về cách sử dụng hàm:

```javascript
const { compareObject } = require('hoa-utils');

const objectA = {
  name: 'Alice',
  age: 25,
  hobbies: ['reading', 'cycling']
};

const objectB = {
  name: 'Alice',
  age: 25,
  hobbies: ['reading', 'cycling']
};

const result = compareObject(objectA, objectB);
console.log(result); // Output: true
```

Trong ví dụ trên, `compareObject` sẽ so sánh `objectA` và `objectB` để xác định xem chúng có giống nhau không. Kết quả sẽ là `true` nếu cả hai đối tượng có cùng cấu trúc và giá trị cho mỗi thuộc tính tương ứng.

## Kết Luận

Thư viện `hoa-utils` và hàm `compareObject` là công cụ lý tưởng cho bất kỳ ai cần đảm bảo rằng hai đối tượng JavaScript là hoàn toàn giống nhau. Đây là một phần không thể thiếu trong quá trình kiểm thử và xác minh dữ liệu, giúp bạn ổn định và tập hợp kiến thức lập trình của mình.