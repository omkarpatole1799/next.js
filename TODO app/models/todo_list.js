import Sequelize from 'sequelize'
import sequelize from '@/lib/db-sequelize-connect'

const todo_list = sequelize.define('todo_list',{
	id :{
		type: Sequelize.INTEGER,
		primaryKey: true, 
		autoIncrement:true, 
		allowNull: false
	},
	todo_name: {
		type: Sequelize.STRING(255)
	},
	todo_description: {
		type: Sequelize.STRING(255)
	}
}, 
{
	createdAt: false, 
	updatedAt: false
})

export default todo_list
