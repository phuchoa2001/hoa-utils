# Hướng dẫn sử dụng hàm `getImageUrlWithCacheId` để quản lý bộ nhớ đệm và tải lại cache

Hàm `getImageUrlWithCacheId` là một công cụ hữu ích để quản lý bộ nhớ đệm trình duyệt (browser cache) cho các tài nguyên hình ảnh trong ứng dụng của bạn. Nó cho phép bạn tạo ra một `cacheId` dựa trên nhóm cache cụ thể, giúp kiểm soát việc tải lại cache khi cần thiết.

## Tổng quan

Khi trình duyệt tải một tài nguyên (hình ảnh, CSS, JavaScript, v.v.), nó sẽ lưu trữ tài nguyên đó trong bộ nhớ đệm để sử dụng cho các lần truy cập tiếp theo. Điều này giúp tăng tốc độ tải trang và giảm lưu lượng mạng. Tuy nhiên, trong một số trường hợp, bạn cần buộc trình duyệt tải lại tài nguyên từ máy chủ để đảm bảo người dùng nhận được phiên bản mới nhất.

Hàm `getImageUrlWithCacheId` giải quyết vấn đề này bằng cách cho phép bạn tạo ra một `cacheId` dựa trên nhóm cache cụ thể. Khi bạn nâng phiên bản của một nhóm cache, tất cả các tài nguyên thuộc nhóm đó sẽ được tải lại từ máy chủ và lưu vào bộ nhớ đệm trình duyệt với `cacheId` mới.

## Cách sử dụng

Để sử dụng hàm `getImageUrlWithCacheId`, bạn cần truyền vào một URL hình ảnh và hai tham số tùy chọn `cacheGroup` và `forceNewCacheId`.

```javascript
const updatedImageUrl = getImageUrlWithCacheId(
  imageUrl,
  cacheGroup,
  forceNewCacheId
);
```

- `imageUrl` (bắt buộc): URL hình ảnh gốc.
- `cacheGroup` (tùy chọn): Nhóm cache mà hình ảnh thuộc về (ví dụ: 'product(v1.0.0)'). Nếu được cung cấp, `cacheId` sẽ được tạo dựa trên tên nhóm cache này.
- `forceNewCacheId` (tùy chọn, mặc định là `false`): Nếu `true`, hàm sẽ luôn tạo ra một `cacheId` mới bằng cách sử dụng `Date.now().toString()`.

## Quản lý nhóm cache

Để quản lý các nhóm cache, bạn nên tạo một file riêng để lưu trữ tất cả các nhóm cache. Ví dụ, bạn có thể tạo một file `cacheGroups.js` với nội dung như sau:

```javascript
const cacheGroups = {
  product: 'product(v1.0.0)',
  icon: 'icon(v2.1.0)',
  // Thêm các nhóm cache khác tại đây
};

module.exports = cacheGroups;
```

Sau đó, bạn có thể import và sử dụng các nhóm cache từ file này khi gọi hàm `getImageUrlWithCacheId`.

```javascript
const cacheGroups = require('./cacheGroups');

console.log(
  getImageUrlWithCacheId('https://example.com/product.jpg', cacheGroups.product)
); // Output: 'https://example.com/product.jpg?cacheId=product(v1.0.0)'
console.log(
  getImageUrlWithCacheId('https://example.com/icon.png', cacheGroups.icon)
); // Output: 'https://example.com/icon.png?cacheId=icon(v2.1.0)'
```

## Tải lại cache khi nâng phiên bản nhóm

Khi bạn nâng phiên bản của một nhóm cache trong file `cacheGroups.js`, bộ nhớ đệm trình duyệt sẽ tự động tải lại tất cả các tài nguyên (hình ảnh, CSS, JavaScript, v.v.) thuộc nhóm đó từ máy chủ và lưu vào bộ nhớ đệm với `cacheId` mới.

Ví dụ, nếu bạn thay đổi giá trị của `product` từ `'product(v1.0.0)'` thành `'product(v1.0.1)'`, thì tất cả các hình ảnh thuộc nhóm `product` sẽ được tải lại từ máy chủ và lưu vào bộ nhớ đệm trình duyệt với `cacheId` mới là `product(v1.0.1)`.

Điều này đảm bảo rằng người dùng luôn nhận được phiên bản mới nhất của tài nguyên khi có thay đổi trong ứng dụng. Bằng cách quản lý các nhóm cache và nâng phiên bản khi cần thiết, bạn có thể kiểm soát việc tải lại cache một cách dễ dàng và hiệu quả.

Lưu ý rằng việc tải lại cache chỉ xảy ra khi người dùng truy cập vào trang web hoặc tải lại trang. Nếu người dùng đang ở trong trang web và bạn nâng phiên bản nhóm cache, họ sẽ không nhận được phiên bản mới ngay lập tức. Tuy nhiên, khi họ tải lại trang hoặc truy cập vào một trang khác, bộ nhớ đệm trình duyệt sẽ tải lại tài nguyên với `cacheId` mới.

Bằng cách sử dụng hàm `getImageUrlWithCacheId` kết hợp với quản lý nhóm cache và nâng phiên bản khi cần thiết, bạn có thể đảm bảo rằng người dùng luôn nhận được phiên bản mới nhất của tài nguyên, đồng thời tận dụng hiệu quả của bộ nhớ đệm trình duyệt để tăng tốc độ tải trang.

Đây là phiên bản đã được sửa đổi để phù hợp hơn với hàm `getImageUrlWithCacheId`:

## Lưu ý

- Hàm `getImageUrlWithCacheId` sử dụng `Date.now().toString()` để tạo ra một `cacheId` mới khi tham số `forceNewCacheId` là `true`. Điều này đảm bảo rằng mỗi lần gọi hàm với `forceNewCacheId` bật thì mỗi lần tải lại trang nó sẽ luôn tải mới và không lấy ở bộ nhớ đệm

- Bằng cách sử dụng hàm `getImageUrlWithCacheId` kết hợp với việc quản lý các nhóm cache trong một file riêng như `cacheGroups.js`, bạn có thể dễ dàng kiểm soát và quản lý cache cho các tài nguyên hình ảnh trong ứng dụng của mình.

- Khi cần tải lại cache cho một nhóm cụ thể, bạn chỉ cần nâng phiên bản của nhóm đó trong file `cacheGroups.js`. Ví dụ, nếu bạn muốn tải lại cache cho nhóm `product`, hãy thay đổi giá trị của `product` từ `'product(v1.0.0)'` thành `'product(v1.0.1)'`. Khi người dùng truy cập vào trang web hoặc tải lại trang, bộ nhớ đệm trình duyệt sẽ tự động tải lại tất cả các hình ảnh thuộc nhóm `product` với `cacheId` mới là `product(v1.0.1)`.

Việc sử dụng `getImageUrlWithCacheId` giúp bạn kiểm soát việc tải lại cache một cách dễ dàng và hiệu quả, đồng thời tận dụng hiệu quả của bộ nhớ đệm trình duyệt để tăng tốc độ tải trang.
