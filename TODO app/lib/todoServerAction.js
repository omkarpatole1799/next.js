'use server'
import db from '@/lib/db-connect'
import  todo_list  from '@/models/todo_list'
export async function postTodoData(data){
	await todo_list.create({
		todo_name: 'TEst',
		todo_description: 'description'
	})
	// return db.query(`
	// 	INSERT INTO todo_list (todo_name, todo_description) VALUES (?, ?);
	// `,[data.todoName, data.todoDescription])	
}