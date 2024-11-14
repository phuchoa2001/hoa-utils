## Giới Thiệu

`hoa-utils` là một thư viện tiện ích JavaScript được thiết kế để cung cấp các hàm hữu ích cho việc phát triển phần mềm. Mục đích chính của thư viện này là giúp đơn giản hóa các tác vụ thường gặp như so sánh đối tượng, sao chép đối tượng, quản lý dữ liệu localStorage và tối ưu hiệu suất bằng cách lưu trữ kết quả của các hàm tính toán phức tạp.

Thư viện bao gồm các hàm chính sau:

| Tên Hàm              | Tính Năng                                                                                                                            |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `compareObject`      | So sánh sâu giữa hai đối tượng để kiểm tra sự bằng nhau về cấu trúc và giá trị.                                                      |
| `cloneObject`        | Tạo một bản sao sâu của đối tượng, đảm bảo rằng bản sao là một thực thể độc lập.                                                     |
| `createKeyedStorage` | Tạo ra một đối tượng để quản lý dữ liệu trong `localStorage` với một key riêng biệt.                                                 |
| `memoize`            | Tạo ra một phiên bản memoized của một hàm, lưu trữ kết quả của hàm với các đầu vào nhất định để tránh tính toán lặp lại.             |
| `deepClone`          | Tạo một bản sao sâu của đối tượng hoặc giá trị đã cho, sử dụng phương thức `cloneDeep` từ thư viện Lodash.                           |
| `deepEqual`          | So sánh sâu giữa hai giá trị, bao gồm đối tượng, mảng và kiểu dữ liệu nguyên thủy, sử dụng phương thức `isEqual` từ thư viện Lodash. |

Thư viện `hoa-utils` được thiết kế dành cho các lập trình viên JavaScript, đặc biệt là những người làm việc với đối tượng, dữ liệu và tối ưu hiệu suất. Bằng cách sử dụng các hàm tiện ích này, các lập trình viên có thể đơn giản hóa mã nguồn, tăng tính nhất quán và đảm bảo tính chính xác trong việc xử lý dữ liệu.

## Cài đặt và Sử dụng

Bạn có thể cài đặt `hoa-utils` thông qua npm:

```
npm install hoa-utils
```

Hoặc sử dụng CDN:

```html
<script src="https://unpkg.com/hoa-utils"></script>
```

Sau khi cài đặt, bạn có thể sử dụng các hàm trong thư viện như sau:

```javascript
import {
  compareObject,
  cloneObject,
  createKeyedStorage,
  memoize,
} from 'hoa-utils';

// Sử dụng các hàm ở đây
```

## Tài liệu

Để tìm hiểu chi tiết về cách sử dụng từng hàm, hãy tham khảo tài liệu tại: https://hoa-utils.netlify.app

## Về Dự án

`hoa-utils` được phát triển bởi [Đặng Phúc Hòa](https://github.com/phuchoa2001) và được phát hành dưới giấy phép MIT License.

Mã nguồn của dự án có thể được tìm thấy tại: https://github.com/phuchoa2001/hoa-utils

Mọi đóng góp, báo cáo lỗi hoặc yêu cầu tính năng mới đều được hoan nghênh. Hãy tham gia cùng chúng tôi để cải thiện và phát triển thư viện `hoa-utils`!
