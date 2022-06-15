import 'dotenv/config';
import { Sequelize } from 'sequelize';
import { modelLoader } from '../utils/model-loader.js';

// Constants
const HOST = process.env.MYSQL_DB_HOST || 'localhost';
const USER = process.env.MYSQL_USER || '';
const PASSWORD = process.env.MYSQL_PASSWORD || '';
const SCHEMA = process.env.MYSQL_DATABASE || '';

console.log("mysql db host:", HOST);
// Create Sequelize connection
export const sequelize = new Sequelize(SCHEMA, USER, PASSWORD, {
	host: HOST,
	dialect: 'mysql',
	define: {
		timestamps: false,
	},
	logging: false//console.log,
});

const loadDb = async () => {
	try {
		modelLoader(sequelize);
		// await sequelize.sync({ alter: true });
		console.log('\n\tDB loaded successfully');
	} catch (error) {
		console.error('\n\tFailed to load db: ', error);
	}
};

loadDb();