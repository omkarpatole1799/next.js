'use client'
import styles from './AddTodo.module.css'
import { redirect } from "next/navigation"

async function postTodoData(formData){
	let name = formData.get('todoName')
	let description =  formData.get('todoDescription')
	try {
		let res = await fetch('http://localhost:3000/api/todo', {
			method: 'POST',
			headers: {
				'Content-Type':'application/json',
			},
			body: JSON.stringify({name, description})
		})
		if (!res.ok) throw new Error('Failed to add todo, try again later!')
		return res.json()
	} catch (error) {
		return error.message
	}
}

export default function AddTodo(){
	const handleSubmit = async (formData) =>{
		// TODO (Omkar) Add validation for form
		let res = await postTodoData(formData)

		if (res.call === 1) {
			redirect('/todo/list')
		}
	}

	return <>
		<form action={handleSubmit} className={styles.addTodoForm}>
			<input className={styles.todoInput} type="text" name='todoName' placeholder="todo" />	
			<input className={styles.todoInput} type="text" name='todoDescription' placeholder="description" />	
			<button className={styles.addTodoBtn} type='submit'>Add</button>
		</form>	
	</>
}