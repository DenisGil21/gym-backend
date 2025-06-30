import { Sequelize } from 'sequelize';

// const db = new Sequelize('gymapp_kof9', 'admin', 'vdxvazAzqcSKZDUzQmrtDCe781bWY6b6', {
//     host:'dpg-d1cogcffte5s738re7u0-a',
//     dialect:'postgres',
//     // logging:false
// });
const db = new Sequelize('postgresql://admin:vdxvazAzqcSKZDUzQmrtDCe781bWY6b6@dpg-d1cogcffte5s738re7u0-a.oregon-postgres.render.com/gymapp_kof9',{
    dialectOptions: {
        ssl: {
            require: true, // This will ensure SSL is used
            rejectUnauthorized: false // Sometimes needed for self-signed certs or specific cloud setups. Be cautious in production.
        }
    }
});

export default db;