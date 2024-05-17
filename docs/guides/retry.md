# Hướng dẫn sử dụng hàm `retry`

Hàm `retry` trong thư viện `hoa-utils` cho phép bạn thực hiện lại một hàm bất đồng bộ (async function) nếu nó gặp lỗi, với số lần thử lại được chỉ định.

## Cách sử dụng

Để sử dụng hàm `retry`, bạn cần truyền vào hai tham số:
- `fn`: Hàm bất đồng bộ (async function) mà bạn muốn thực hiện lại nếu gặp lỗi. Hàm này phải trả về một Promise.
- `retries`: Số lần thử lại tối đa. Nếu hàm `fn` gặp lỗi, nó sẽ được thực hiện lại tối đa `retries` lần.

```javascript
const { retry } = require('hoa-utils');

async function fetchData() {
  // Thực hiện một request bất đồng bộ
  // Nếu request thất bại, nó sẽ throw một Error
}

retry(fetchData, 3)
  .then((result) => {
    console.log('Thành công sau nhiều lần thử:', result);
  })
  .catch((error) => {
    console.error('Thất bại sau nhiều lần thử:', error);
  });
```

Trong ví dụ trên, hàm `fetchData` sẽ được thực hiện. Nếu nó gặp lỗi, hàm `retry` sẽ thử lại tối đa 3 lần. Nếu thành công, kết quả sẽ được trả về trong `.then()`. Nếu thất bại sau 3 lần thử, lỗi sẽ được bắt trong `.catch()`.

## Xử lý đầu vào không hợp lệ

Hàm `retry` yêu cầu tham số `fn` phải là một hàm trả về Promise, và tham số `retries` phải là một số. Nếu không thỏa mãn điều kiện này, hàm sẽ throw một Error với thông báo tương ứng.

```javascript
const { retry } = require('hoa-utils');

retry(123, 3); // Throw Error: fn must be a function that returns a Promise
retry(() => {}, '3'); // Throw Error: retries must be a number
```

## Lưu ý

- Hàm `fn` phải là một async function hoặc trả về một Promise. Nếu `fn` không trả về Promise, hàm `retry` sẽ throw Error.
- Số lần thử lại `retries` phải là một số nguyên dương. Nếu `retries` nhỏ hơn hoặc bằng 0, hàm `fn` sẽ chỉ được thực hiện một lần duy nhất.
- Nếu tất cả các lần thử đều thất bại, hàm `retry` sẽ trả về một Promise bị reject với lỗi của lần thử cuối cùng.

Hàm `retry` hữu ích trong các trường hợp bạn muốn thực hiện lại một tác vụ bất đồng bộ nếu nó gặp lỗi, như khi gặp sự cố mạng hoặc lỗi tạm thời từ server. Nó giúp tăng tính ổn định và khả năng phục hồi của ứng dụng.