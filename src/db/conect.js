import { Sequelize } from "sequelize"

const sequelize = new Sequelize('veterinaria', 'root', '123456', {
    host: '172.17.0.2',//localhost
    dialect: 'mysql',
    port: '3306'
});


export default sequelize