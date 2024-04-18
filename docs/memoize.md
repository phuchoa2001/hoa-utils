# Hướng Dẫn Sử Dụng Hàm `memoize`

Hàm `memoize` trong thư viện `hoa-utils` là một hàm tiện ích giúp tối ưu hiệu suất bằng cách lưu trữ kết quả của các hàm tính toán phức tạp. Nó áp dụng kỹ thuật memoization, giúp tránh tính toán lặp lại cho cùng một đầu vào bằng cách lưu trữ kết quả trong một cache.

## Cách Sử Dụng

Để sử dụng hàm `memoize`, bạn cần truyền vào một hàm khác làm đối số. Hàm `memoize` sẽ trả về một phiên bản memoized của hàm đó.

```javascript
const memoizedFunction = memoize(originalFunction);
```

Sau đó, bạn có thể gọi `memoizedFunction` như bình thường. Nếu `memoizedFunction` được gọi với cùng một tập đối số, nó sẽ trả về kết quả đã được lưu trong cache thay vì tính toán lại.

```javascript
const result1 = memoizedFunction(arg1, arg2);
const result2 = memoizedFunction(arg1, arg2); // Lấy kết quả từ cache
```

## Ví Dụ

Dưới đây là một ví dụ về cách sử dụng hàm `memoize` để tối ưu hiệu suất của hàm tính giai thừa:

```javascript
// Hàm tính giai thừa
const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

// Tạo phiên bản memoized của hàm factorial
const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); // Tính toán lần đầu, kết quả: 120
console.log(memoizedFactorial(5)); // Lấy từ cache, kết quả: 120
console.log(memoizedFactorial(6)); // Tính toán lần đầu, kết quả: 720
console.log(memoizedFactorial(6)); // Lấy từ cache, kết quả: 720
```

Trong ví dụ trên, chúng ta tạo ra một phiên bản memoized của hàm `factorial` bằng cách gọi `memoize(factorial)`. Khi gọi `memoizedFactorial(5)` lần đầu tiên, hàm sẽ tính toán `factorial(5)` và lưu kết quả vào cache. Lần gọi tiếp theo với cùng đối số `5`, hàm sẽ lấy kết quả từ cache thay vì tính toán lại. Điều tương tự cũng xảy ra với `memoizedFactorial(6)`.

## Lưu Ý

- Hàm `memoize` chỉ hiệu quả cho các hàm thuần túy (pure functions), nghĩa là hàm luôn trả về cùng một kết quả với cùng một đầu vào và không có tác dụng phụ.
- Memoization có thể tiêu tốn nhiều bộ nhớ hơn nếu không được sử dụng cẩn thận. Bạn nên xem xét giới hạn bộ nhớ cache hoặc xóa cache khi không cần thiết.
- Memoization không phù hợp cho các hàm có tác dụng phụ hoặc phụ thuộc vào các yếu tố bên ngoài.

Bằng cách sử dụng hàm `memoize` trong `hoa-utils`, bạn có thể tối ưu hiệu suất của các hàm tính toán phức tạp bằng cách lưu trữ và tái sử dụng kết quả đã tính toán trước đó, giúp tiết kiệm thời gian và tài nguyên.
