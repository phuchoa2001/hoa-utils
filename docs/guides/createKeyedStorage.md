Đây là nội dung cho file `createKeyedStorage.md`:

# Hướng dẫn sử dụng hàm `createKeyedStorage`

Hàm `createKeyedStorage` trong thư viện `hoa-utils` được sử dụng để tạo ra một đối tượng chứa các phương thức để truy cập và quản lý dữ liệu trong `localStorage` với một key riêng biệt. Điều này giúp tránh xung đột giữa các key của các ứng dụng khác nhau khi sử dụng `localStorage`.

## Cách sử dụng

Để tạo một đối tượng quản lý `localStorage` với key riêng biệt, bạn cần truyền một chuỗi duy nhất làm tham số vào hàm `createKeyedStorage`.

```javascript
const { createKeyedStorage } = require('hoa-utils');

const storageInstance = createKeyedStorage('myWebsite');
```

Hàm `createKeyedStorage` sẽ trả về một đối tượng `storageInstance` chứa các phương thức sau:

- `getItem(itemKey)`: Lấy giá trị tương ứng với `itemKey` trong `localStorage`.
- `setItem(itemKey, value)`: Lưu trữ cặp `itemKey-value` vào `localStorage`.
- `removeItem(itemKey)`: Xóa cặp `itemKey-value` khỏi `localStorage`.
- `clearMatchingKeys()`: Xóa tất cả các key trong `localStorage` có cùng tiền tố `storageKey`.
- `getItemParsed(itemKey)`: Lấy giá trị tương ứng với `itemKey` trong `localStorage` và parse nó thành đối tượng JavaScript nếu có thể.
- `setItemJSON(itemKey, value)`: Lưu trữ cặp `itemKey-value` vào `localStorage`, với `value` được chuyển đổi thành chuỗi JSON nếu là đối tượng.

## Ví dụ sử dụng

```javascript
const myWebsiteStorage = createKeyedStorage('myWebsite');

// Lưu trữ dữ liệu
myWebsiteStorage.setItemJSON('user', { name: 'John', age: 30 });
myWebsiteStorage.setItem('message', 'Hello, World!');

// Lấy dữ liệu
const user = myWebsiteStorage.getItemParsed('user'); // { name: 'John', age: 30 }
const message = myWebsiteStorage.getItem('message'); // 'Hello, World!'

// Xóa dữ liệu
myWebsiteStorage.removeItem('user');

// Xóa tất cả các key có cùng tiền tố
myWebsiteStorage.clearMatchingKeys();
```

Trong ví dụ trên, chúng ta tạo một đối tượng `myWebsiteStorage` bằng cách gọi `createKeyedStorage('myWebsite')`. Tất cả các key lưu trữ trong `localStorage` bởi `myWebsiteStorage` sẽ có tiền tố `__myWebsite__`.

Chúng ta có thể sử dụng các phương thức `setItemJSON`, `setItem`, `getItemParsed`, `getItem`, `removeItem` và `clearMatchingKeys` để quản lý dữ liệu trong `localStorage` với key riêng biệt cho ứng dụng của chúng ta.

## Lưu ý

- Hàm `createKeyedStorage` sử dụng closure để lưu trữ `storageKey` và tạo ra các phương thức có key riêng. Điều này đảm bảo rằng các key của ứng dụng khác không bị xung đột với key của ứng dụng của bạn trong `localStorage`.
- Các hàm `getItemParsed` và `setItemJSON` được sử dụng để quản lý dữ liệu dạng đối tượng JavaScript trong `localStorage` một cách dễ dàng hơn.
- Nếu bạn cần lưu trữ dữ liệu lâu dài, hãy sử dụng `localStorage`. Nếu chỉ cần lưu trữ tạm thời, bạn có thể sử dụng các cấu trúc dữ liệu khác như `Map` hoặc `IndexedDB`.

Để tăng hiệu suất và dễ dàng sử dụng hàm `createKeyedStorage` từ thư viện `hoa-utils`, bạn có thể tạo một file riêng để lưu trữ đối tượng `storageInstance` và export nó ra. Sau đó, ở bất kỳ nơi nào bạn cần sử dụng `storageInstance`, bạn chỉ cần import file đó.

Dưới đây là hướng dẫn chi tiết:

1. Tạo một file mới, ví dụ: `myWebsiteStorage.js`.

2. Trong file `myWebsiteStorage.js`, import hàm `createKeyedStorage` từ thư viện `hoa-utils` và tạo đối tượng `storageInstance`:

```javascript
const { createKeyedStorage } = require('hoa-utils');

const storageInstance = createKeyedStorage('myWebsite');

module.exports = storageInstance;
```

3. Bây giờ, ở bất kỳ nơi nào bạn cần sử dụng `storageInstance`, bạn chỉ cần import file `myWebsiteStorage.js`:

```javascript
const myWebsiteStorage = require('./myWebsiteStorage');

// Sử dụng các phương thức của storageInstance
myWebsiteStorage.setItemJSON('user', { name: 'John', age: 30 });
const user = myWebsiteStorage.getItemParsed('user');
// ...
```

Bằng cách tách riêng việc tạo `storageInstance` ra một file riêng và export nó, bạn có thể tăng hiệu suất bằng cách chỉ cần import file đó một lần duy nhất trong toàn bộ ứng dụng của bạn. Sau đó, bạn có thể sử dụng `storageInstance` ở bất kỳ nơi nào mà không cần phải tạo lại đối tượng này nhiều lần.

Lưu ý rằng bạn có thể đặt tên file `myWebsiteStorage.js` theo ý muốn của bạn, miễn là tên file phù hợp với quy ước đặt tên trong dự án của bạn.

Bằng cách sử dụng cách tiếp cận này, bạn có thể dễ dàng quản lý và sử dụng `storageInstance` trong toàn bộ ứng dụng của mình, đồng thời tăng hiệu suất bằng cách tránh tạo lại đối tượng này nhiều lần.