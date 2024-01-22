import mysql from 'mysql2'

const pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '1111',
	database:'next_todo_app',
	port: 3306,
})

export default pool.promise()