'use client'

import { postTodoData } from "@/lib/todoServerAction"
import { useState } from "react"

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
		console.log(res, '-- res')
	}

	return <>
	
		<form action="" onSubmit={handleSubmit}>
			<input type="text" name='todoName' value={todoData.todoName} placeholder="todo" onChange={handleInput}/>	
			<input type="text" name='todoDescription' value={todoData.todoDescription} placeholder="description" onChange={handleInput}/>	
			<button type='submit'>Add</button>
		</form>	
	</>
}