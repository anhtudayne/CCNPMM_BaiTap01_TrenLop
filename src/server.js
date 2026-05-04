import express from 'express';
import bodyParser from 'body-parser';
import configViewEngine from './config/viewEngine';
import initWebRoutes from './route/web';
import connectDB from './config/configdb';

// Sử dụng dotenv để đọc biến môi trường từ file .env
require('dotenv').config();

let app = express();

// Cấu hình body-parser để đọc dữ liệu từ form
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Cấu hình View Engine
configViewEngine(app);

// Khởi tạo các Routes
initWebRoutes(app);

// Kết nối Database
connectDB();

// Lắng nghe tại cổng được khai báo trong .env
let port = process.env.PORT || 8088;
app.listen(port, () => {
    console.log(`Backend Nodejs is running on the port: ${port}`);
});
