import express from 'express';
import path from 'path';

// Cấu hình View Engine cho ứng dụng
let configViewEngine = (app) => {
    // Thiết lập thư mục chứa file tĩnh (CSS, JS, images...)
    app.use(express.static('./src/public'));

    // Cấu hình view engine là EJS
    app.set('view engine', 'ejs');

    // Trỏ đường dẫn tới thư mục chứa các file views
    app.set('views', './src/views');
};

export default configViewEngine;
