import { Sequelize } from "sequelize";

const db = new Sequelize('UniversoDown', 'root', '', {
    host: 'localhost', 
    dialect: 'mysql'
})

export default db