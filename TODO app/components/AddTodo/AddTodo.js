'use client'
import { useState } from "react"
import styles from './AddTodo.module.css'

async function postTodoData(name, description){
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
	const [todoData, setTodoData] = useState({
		todoName: '',
		todoDescription: ''
	})

	const handleInput = (e) =>{
		setTodoData({...todoData, [e.target.name]: e.target.value})
	}

	const handleSubmit = async (e) =>{
		e.preventDefault()
		let res = await postTodoData(todoData.todoName, todoData.todoDescription)
		if (res.call === 1) {
			alert('Successfully created todo')
		}
		setTodoData({
			todoName: '',
			todoDescription: ''
		})
	}

	return <>
		<form action="" onSubmit={handleSubmit} className={styles.addTodoForm}>
			<input className={styles.todoInput} type="text" name='todoName' value={todoData.todoName} placeholder="todo" onChange={handleInput}/>	
			<input className={styles.todoInput} type="text" name='todoDescription' value={todoData.todoDescription} placeholder="description" onChange={handleInput}/>	
			<button className={styles.addTodoBtn} type='submit'>Add</button>
		</form>	
	</>
}