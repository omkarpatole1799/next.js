'use client'

import { postTodoData } from "@/lib/todoServerAction"
import { useState } from "react"
import styles from './AddTodo.module.css'

export default function AddTodo(){
	const [todoData, setTodoData] = useState({
		todoName: '',
		todoDescription: ''
	})

	const handleInput = (e) =>{
		setTodoData({...todoData, [e.target.name]: e.target.value})
	}

	const handleSubmit = async (e) =>{
		let res = await postTodoData(todoData)
	}

	return <>
		<form action="" onSubmit={handleSubmit} className={styles.addTodoForm}>
			<input className={styles.todoInput} type="text" name='todoName' value={todoData.todoName} placeholder="todo" onChange={handleInput}/>	
			<input className={styles.todoInput} type="text" name='todoDescription' value={todoData.todoDescription} placeholder="description" onChange={handleInput}/>	
			<button className={styles.addTodoBtn} type='submit'>Add</button>
		</form>	
	</>
}