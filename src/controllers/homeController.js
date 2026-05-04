import CRUDService from '../services/CRUDService';

// Hiển thị trang chủ
let getHomePage = async (req, res) => {
    try {
        return res.render('homepage.ejs');
    } catch (e) {
        console.log(e);
    }
};

// Hiển thị form tạo User mới
let getCRUD = (req, res) => {
    return res.render('crud.ejs');
};

// Xử lý tạo User mới (nhận dữ liệu từ form)
let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.redirect('/get-crud');
};

// Hiển thị danh sách tất cả Users
let getFindAllCrud = async (req, res) => {
    let data = await CRUDService.getAllUser();
    return res.render('users/findAllUser.ejs', {
        datalist: data,
    });
};

// Hiển thị form chỉnh sửa User
let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);
        return res.render('users/updateUser.ejs', {
            user: userData,
        });
    } else {
        return res.send('User not found!');
    }
};

// Xử lý cập nhật User
let putCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDService.updateUser(data);
    return res.render('users/findAllUser.ejs', {
        datalist: allUsers,
    });
};

// Xử lý xóa User
let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDService.deleteUserById(id);
        return res.redirect('/get-crud');
    } else {
        return res.send('User not found!');
    }
};

module.exports = {
    getHomePage,
    getCRUD,
    postCRUD,
    getFindAllCrud,
    getEditCRUD,
    putCRUD,
    deleteCRUD,
};
