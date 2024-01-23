'use server'
import db from '@/lib/db-connect'

export async function postTodoData(data){
	return db.query(`
		INSERT INTO todo_list (todo_name, todo_description) VALUES (?, ?);
	`,[data.todoName, data.todoDescription])	
}