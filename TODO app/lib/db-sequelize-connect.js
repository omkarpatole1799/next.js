import Sequelize  from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(process.env.DB, process.env.DB_USER,process.env.DB_PASS, {
	host: process.env.DB_HOST,
	post: '3306',
	dialect: 'mysql',
	dialectModule: require('mysql2'),
	query: {raw: true}
}) 

async function getConnectToDb() {
	try {
		await sequelize.authenticate()
		await sequelize.sync({alter: true})		
	} catch (error) {
		console.log(error, 'error in connection')
	}
}

getConnectToDb()

export default sequelize