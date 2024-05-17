# Hướng dẫn sử dụng hàm `retryWithDelay`

Hàm `retryWithDelay` trong thư viện `hoa-utils` cho phép bạn thực hiện lại một hàm bất đồng bộ (async function) nếu nó gặp lỗi, với số lần thử lại và khoảng thời gian chờ giữa các lần thử được chỉ định.

## Cách sử dụng

Để sử dụng hàm `retryWithDelay`, bạn cần truyền vào ba tham số:
- `fn`: Hàm bất đồng bộ (async function) mà bạn muốn thực hiện lại nếu gặp lỗi. Hàm này phải trả về một Promise.
- `retries`: Số lần thử lại tối đa. Nếu hàm `fn` gặp lỗi, nó sẽ được thực hiện lại tối đa `retries` lần.
- `delay`: Khoảng thời gian chờ (đơn vị millisecond) giữa các lần thử lại.

```javascript
const { retryWithDelay } = require('hoa-utils');

async function fetchData() {
  // Thực hiện một request bất đồng bộ
  // Nếu request thất bại, nó sẽ throw một Error
}

retryWithDelay(fetchData, 3, 1000)
  .then((result) => {
    console.log('Thành công sau nhiều lần thử:', result);
  })
  .catch((error) => {
    console.error('Thất bại sau nhiều lần thử:', error);
  });
```

Trong ví dụ trên, hàm `fetchData` sẽ được thực hiện. Nếu nó gặp lỗi, hàm `retryWithDelay` sẽ thử lại tối đa 3 lần, với khoảng thời gian chờ 1000ms (1 giây) giữa các lần thử. Nếu thành công, kết quả sẽ được trả về trong `.then()`. Nếu thất bại sau 3 lần thử, lỗi sẽ được bắt trong `.catch()`.

## Xử lý đầu vào không hợp lệ

Hàm `retryWithDelay` yêu cầu tham số `fn` phải là một hàm trả về Promise, tham số `retries` và `delay` phải là các số. Nếu không thỏa mãn điều kiện này, hàm sẽ throw một Error với thông báo tương ứng.

```javascript
const { retryWithDelay } = require('hoa-utils');

retryWithDelay(123, 3, 1000); // Throw Error: fn must be a function that returns a Promise
retryWithDelay(() => {}, '3', 1000); // Throw Error: retries must be a number
retryWithDelay(() => {}, 3, '1000'); // Throw Error: delay must be a number
```

## Lưu ý

- Hàm `fn` phải là một async function hoặc trả về một Promise. Nếu `fn` không trả về Promise, hàm `retryWithDelay` sẽ throw Error.
- Số lần thử lại `retries` phải là một số nguyên dương. Nếu `retries` nhỏ hơn hoặc bằng 0, hàm `fn` sẽ chỉ được thực hiện một lần duy nhất.
- Khoảng thời gian chờ `delay` được tính bằng đơn vị millisecond (ms). Ví dụ: 1000ms = 1 giây.
- Nếu tất cả các lần thử đều thất bại, hàm `retryWithDelay` sẽ trả về một Promise bị reject với lỗi của lần thử cuối cùng.

Hàm `retryWithDelay` hữu ích trong các trường hợp bạn muốn thực hiện lại một tác vụ bất đồng bộ nếu nó gặp lỗi, đồng thời có khoảng thời gian chờ giữa các lần thử. Điều này giúp tránh việc gửi quá nhiều request trong thời gian ngắn và cho hệ thống có thời gian phục hồi sau lỗi.