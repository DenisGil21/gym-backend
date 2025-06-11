import { Sequelize } from 'sequelize';

const db = new Sequelize('gymapp', 'postgres', 'admin', {
    host:'localhost',
    dialect:'postgres',
    // logging:false
});

export default db;