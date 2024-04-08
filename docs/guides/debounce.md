# Hướng Dẫn Sử Dụng Hàm `debounce`

Hàm `debounce` là một kỹ thuật lập trình phổ biến được sử dụng để giới hạn tần suất gọi một hàm nhất định trong một khoảng thời gian nhất định. Nó thường được áp dụng trong các trường hợp như xử lý sự kiện nhấn phím, cuộn trang, điều chỉnh kích thước cửa sổ, v.v. để tránh việc gọi hàm quá nhiều lần trong một khoảng thời gian ngắn, giúp tăng hiệu suất ứng dụng.

## Cách Sử Dụng

Hàm `debounce` nhận vào hai tham số:

1. `func`: Hàm sẽ được gọi sau khoảng thời gian `delay`.
2. `delay`: Khoảng thời gian chờ (tính bằng mili giây).

Hàm `debounce` trả về một hàm mới, đây là hàm sẽ được gọi mỗi khi có sự kiện xảy ra. Nếu hàm mới này được gọi liên tục trong khoảng thời gian `delay`, hàm `func` sẽ không được gọi cho đến khi khoảng thời gian `delay` đã trôi qua mà không có lần gọi mới nào.

```javascript
const debouncedFunction = debounce(func, delay);
```

Sau đó, bạn có thể gọi `debouncedFunction` như bình thường và nó sẽ xử lý việc gọi hàm `func` sau khoảng thời gian `delay` nếu không có lần gọi mới nào.

## Ví Dụ

Dưới đây là một ví dụ về cách sử dụng hàm `debounce` để xử lý sự kiện cuộn trang:

```javascript
// Hàm xử lý sự kiện cuộn trang
const handleScroll = () => {
  // Xử lý logic khi cuộn trang
  console.log('Scrolling...');
};

// Tạo phiên bản debounced của hàm handleScroll với delay 250ms
const debouncedHandleScroll = debounce(handleScroll, 250);

// Gán hàm debounced làm event handler cho sự kiện cuộn trang
window.addEventListener('scroll', debouncedHandleScroll);
```

Trong ví dụ trên, chúng ta tạo ra một phiên bản debounced của hàm `handleScroll` bằng cách gọi `debounce(handleScroll, 250)`. Sau đó, chúng ta gán `debouncedHandleScroll` làm event handler cho sự kiện cuộn trang (`scroll`). Khi người dùng cuộn trang, hàm `handleScroll` sẽ chỉ được gọi sau khi người dùng ngừng cuộn trong 250ms.

## Lưu Ý

- Hàm `debounce` thường được sử dụng để xử lý các sự kiện liên tục như nhấn phím, cuộn trang, điều chỉnh kích thước cửa sổ, v.v. để tránh việc gọi hàm quá nhiều lần trong một khoảng thời gian ngắn.
- Nếu bạn muốn đảm bảo rằng hàm sẽ được gọi ít nhất một lần sau khoảng thời gian `delay`, bạn có thể sử dụng kỹ thuật `throttle` thay vì `debounce`.
- Hàm `debounce` có thể được tùy chỉnh để xử lý các trường hợp đặc biệt, chẳng hạn như gọi hàm ngay lập tức khi sự kiện đầu tiên xảy ra, hoặc gọi hàm khi sự kiện cuối cùng xảy ra.

Bằng cách sử dụng hàm `debounce`, bạn có thể tối ưu hiệu suất ứng dụng bằng cách giới hạn tần suất gọi các hàm xử lý sự kiện, đồng thời vẫn đảm bảo rằng các hàm đó sẽ được gọi khi cần thiết.