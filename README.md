# Bài Tập 01: CRUD với ExpressJS - Sequelize - MySQL

**Người thực hiện:** Võ Văn Tú - 23110359 

## Giới thiệu
Đây là bài tập xây dựng một ứng dụng web cơ bản thực hiện các thao tác CRUD (Create, Read, Update, Delete) cho đối tượng `User`. 
Ứng dụng được xây dựng trên nền tảng **Node.js** sử dụng framework **ExpressJS**, thao tác với cơ sở dữ liệu **MySQL** thông qua ORM **Sequelize**, và sử dụng **EJS** làm view engine.

## 🛠 Cài đặt và Chạy ứng dụng

### Yêu cầu hệ thống
- Node.js (đã cài đặt môi trường Node)
- MySQL Server (đang chạy)

### Các bước cài đặt

**1. Cài đặt các thư viện cần thiết**
Mở terminal tại thư mục dự án và chạy lệnh:
```bash
npm install
```

**2. Cấu hình Cơ sở dữ liệu**
- Đảm bảo MySQL của bạn đang chạy.
- Mở file `src/config/config.json`.
- Cập nhật thông tin `username` và `password` theo cấu hình MySQL trên máy của bạn .

**3. Khởi tạo Database và Bảng**
Chạy các lệnh sau để tự động tạo cơ sở dữ liệu `crud_baitap01` và bảng `Users`:
```bash
npx sequelize-cli db:create
npx sequelize-cli db:migrate
```

**4. Khởi chạy Server**
```bash
npm start
```
Ứng dụng sẽ chạy tại địa chỉ: `http://localhost:8088/`

## 📁 Cấu trúc thư mục chính
```text
BAI_TAP_01/
├── .babelrc                    # Cấu hình Babel để dùng ES6
├── .env                        # Lưu trữ biến môi trường (PORT, NODE_ENV)
├── package.json                # Quản lý thư viện và cấu hình scripts
└── src/
    ├── config/                 # Cấu hình kết nối Database và View Engine
    ├── controllers/
    │   └── homeController.js   # Xử lý logic trung gian nhận request và trả về views
    ├── migrations/             # Các file migration tạo cấu trúc bảng trong Database
    ├── models/
    │   └── user.js             # Định nghĩa cấu trúc bảng User
    ├── route/
    │   └── web.js              # Định nghĩa các đường dẫn (Routes) của ứng dụng
    ├── services/
    │   └── CRUDService.js      # Chứa các hàm thao tác trực tiếp với Database
    ├── views/                  # Chứa các giao diện hiển thị cho người dùng (EJS)
    └── server.js               # File khởi chạy chính của ứng dụng
```

## 🚀 Chức năng
- **Trang chủ**: Cung cấp đường dẫn đến các chức năng.
- **Create**: Thêm người dùng mới vào hệ thống.
- **Read**: Hiển thị danh sách tất cả người dùng trong Database.
- **Update**: Chỉnh sửa thông tin của một người dùng đã có.
- **Delete**: Xóa người dùng khỏi hệ thống.
