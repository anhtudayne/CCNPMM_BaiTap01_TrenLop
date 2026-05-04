import { Sequelize } from 'sequelize';

// Đọc cấu hình từ config.json
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config.json')[env];

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
        logging: false,
    }
);

// Hàm kết nối đến CSDL
let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

export default connectDB;
