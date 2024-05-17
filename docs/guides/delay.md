# Hướng dẫn sử dụng hàm `delay`

Hàm `delay` trong thư viện `hoa-utils` cho phép bạn tạo ra một promise delay (trì hoãn) với thời gian chờ được chỉ định.

## Cách sử dụng

Để tạo một promise delay, bạn chỉ cần truyền thời gian chờ (đơn vị millisecond) vào hàm `delay`.

```javascript
const { delay } = require('hoa-utils');

async function example() {
  console.log('Bắt đầu delay');
  await delay(2000);
  console.log('Kết thúc delay sau 2 giây');
}

example();
```

Hàm `delay` sẽ trả về một promise sẽ được resolve sau khoảng thời gian chờ được chỉ định.

## Xử lý đầu vào không phải kiểu số

Hàm `delay` chỉ chấp nhận đầu vào là kiểu số (number) biểu thị thời gian chờ. Nếu đầu vào không phải kiểu số, hàm sẽ throw một Error với thông báo "ms must be a number".

Ví dụ:

```javascript
const { delay } = require('hoa-utils');

delay('2000'); // Throw Error: ms must be a number
delay(null); // Throw Error: ms must be a number  
delay({}); // Throw Error: ms must be a number
```

Trong trường hợp trên, vì đầu vào không phải kiểu số, hàm `delay` sẽ throw Error.

## Lưu ý

- Hàm `delay` trả về một promise, do đó bạn cần sử dụng `await` hoặc `.then()` để chờ promise hoàn thành trước khi thực hiện các tác vụ tiếp theo.
- Thời gian chờ được tính bằng đơn vị millisecond (ms). Ví dụ: 1000ms = 1 giây.

Ví dụ sử dụng:

```javascript
async function demoDelay() {
  console.log('Bắt đầu');
  await delay(1000); 
  console.log('Sau 1 giây');
  await delay(2000);
  console.log('Sau 3 giây');
}

demoDelay();
```

Hàm `delay` hữu ích khi bạn cần tạo ra các tác vụ bất đồng bộ với thời gian chờ cụ thể. Nó giúp kiểm soát luồng thực thi của chương trình và tạo hiệu ứng trì hoãn khi cần thiết.