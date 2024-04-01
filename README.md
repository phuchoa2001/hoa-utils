## Giới Thiệu

`hoa-utils` là một thư viện tiện ích JavaScript được thiết kế để cung cấp các hàm hữu ích cho việc phát triển phần mềm. Thư viện này bao gồm các hàm như `compareObject`, `cloneObject` và `createKeyedStorage`, những công cụ mạnh mẽ cho việc so sánh sâu, sao chép sâu giữa các đối tượng và quản lý dữ liệu trong `localStorage`. Các hàm này đảm bảo rằng các đối tượng không chỉ giống nhau về bề mặt mà còn giống nhau về cấu trúc và nội dung, ngay cả khi chúng không phải là cùng một instance trong bộ nhớ. Ngoài ra, `createKeyedStorage` giúp quản lý dữ liệu trong `localStorage` một cách an toàn và hiệu quả, tránh xung đột giữa các ứng dụng khác nhau.

## Bảng Tính Năng Hàm

| Tên Hàm           | Tính Năng                                                                                     |
|-------------------|------------------------------------------------------------------------------------------------|
| `compareObject`   | So sánh sâu giữa hai đối tượng để kiểm tra sự bằng nhau về cấu trúc và giá trị. Nếu một trong hai tham số không phải là đối tượng, hàm sẽ không hoạt động như mong muốn. |
| `cloneObject`     | Tạo một bản sao sâu của đối tượng, đảm bảo rằng bản sao là một thực thể độc lập không chia sẻ tham chiếu với đối tượng gốc. |
| `createKeyedStorage` | Tạo ra một đối tượng chứa các phương thức để truy cập và quản lý dữ liệu trong `localStorage` với một key riêng biệt, tránh xung đột giữa các ứng dụng khác nhau. |

## Cách Sử Dụng

Để sử dụng các hàm tiện ích trong `hoa-utils`, bạn có thể tham khảo các hướng dẫn cụ thể tại trang tài liệu:

- [Hướng dẫn dùng `compareObject`](https://hoa-utils.netlify.app/#/guides/compareObject)
- [Hướng dẫn dùng `cloneObject`](https://hoa-utils.netlify.app/#/guides/cloneObject)
- [Hướng dẫn dùng `createKeyedStorage`](https://hoa-utils.netlify.app/#/guides/createKeyedStorage)

Để quay lại trang chủ của tài liệu, bạn có thể truy cập:

- [Trang Chủ Tài Liệu](https://hoa-utils.netlify.app)

## Kết Luận

Thư viện `hoa-utils` cung cấp các hàm `compareObject`, `cloneObject` và `createKeyedStorage` là công cụ lý tưởng cho bất kỳ ai cần đảm bảo rằng hai đối tượng JavaScript là hoàn toàn giống nhau, cần tạo một bản sao độc lập của một đối tượng, hoặc cần quản lý dữ liệu trong `localStorage` một cách an toàn và hiệu quả. Sử dụng thư viện này giúp tác giả và các nhà phát triển khác ổn định và tập hợp kiến thức lập trình của mình, đồng thời cung cấp một giải pháp tiện lợi và hiệu quả cho việc kiểm thử, xác minh dữ liệu và quản lý dữ liệu trong quá trình phát triển phần mềm.