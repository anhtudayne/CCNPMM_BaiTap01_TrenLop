import express from 'express';
import homeController from '../controllers/homeController';

let router = express.Router();

let initWebRoutes = (app) => {
    // Trang chủ
    router.get('/', homeController.getHomePage);

    // CRUD - Tạo mới
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);

    // CRUD - Đọc danh sách
    router.get('/get-crud', homeController.getFindAllCrud);

    // CRUD - Cập nhật 
    router.get('/edit-crud', homeController.getEditCRUD);
    router.post('/put-crud', homeController.putCRUD);

    // CRUD - Xóa
    router.get('/delete-crud', homeController.deleteCRUD);

    return app.use('/', router);
};

export default initWebRoutes;
