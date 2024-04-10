# Hướng dẫn sử dụng hàm `delay`

Hàm `delay` trong thư viện `hoa-utils` được sử dụng để tạo ra một khoảng trì hoãn trước khi thực hiện một tác vụ nào đó. Hàm này trả về một Promise mới, sử dụng `setTimeout` để tạo ra khoảng trì hoãn trước khi Promise được hoàn thành (resolve).

## Cách sử dụng

```javascript
// Trì hoãn 2 giây
await delay(2000);
console.log('Đã trì hoãn 2 giây');

// Sử dụng trong vòng lặp
for (let i = 0; i < 5; i++) {
  console.log(i);
  await delay(1000); // Trì hoãn 1 giây giữa mỗi lần lặp
}
```

Hàm `delay` này rất hữu ích khi bạn muốn tạm dừng thực thi một đoạn mã JavaScript trong một khoảng thời gian nhất định. Nó thường được sử dụng trong các tác vụ bất đồng bộ, chẳng hạn như hiển thị tiến trình tải, trì hoãn hiệu ứng hoạt hình, v.v.

Lưu ý rằng bạn cần sử dụng từ khóa `await` trước khi gọi `delay` để đợi Promise hoàn thành. Điều này chỉ có thể được thực hiện bên trong một hàm `async`

## Ví dụ sử dụng

Dưới đây là một ví dụ sử dụng hàm `delay` để hiển thị tiến trình tải:

```javascript
const { delay } = require('hoa-utils');

async function loadingAnimation() {
  console.log('Đang tải...');

  for (let i = 0; i < 5; i++) {
    console.log('.');
    await delay(500); // Trì hoãn 0.5 giây giữa mỗi dấu chấm
  }

  console.log('Tải xong!');
}

loadingAnimation();
```

Trong ví dụ trên, hàm `loadingAnimation` sử dụng vòng lặp và hàm `delay` để hiển thị dấu chấm với khoảng cách 0.5 giây, tạo ra hiệu ứng tiến trình tải. Sau khi vòng lặp kết thúc, thông báo "Tải xong!" sẽ được in ra.

Bạn có thể sử dụng hàm `delay` trong nhiều trường hợp khác nhau, chẳng hạn như trì hoãn gửi yêu cầu API, trì hoãn hiệu ứng hoạt hình, v.v.