"use client"
import { useFormState } from "react-dom"
import styles from "./AddTodo.module.css"
import { updateTodo } from "@/lib/todoServerAction"
import SubmitTodoBtn from "./SubmitTodoBtn"
import { useState } from "react"

export default function EditTodoForm({ todoData }) {
	console.log(todoData, "props")
	const [state, formAction] = useFormState(updateTodo, { errMsg: null })
	const [input, setInput] = useState({
		todoName: todoData.todoName,
		todoDescription: todoData.todoDescription
	})

	const handleInputChange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value
		})
	}
	return (
		<>
			<form action={formAction} className={styles.addTodoForm}>
				<input type="number" value={todoData.id} name="id" style={{ display: "none" }} />
				<input
					value={input.todoName}
					className={styles.todoInput}
					type="text"
					name="todoName"
					placeholder="todo"
					onChange={handleInputChange}
				/>

				<input
					className={styles.todoInput}
					type="text"
					name="todoDescription"
					placeholder="description"
					onChange={handleInputChange}
					value={input.todoDescription}
				/>
				{state.errMsg && <p>{state.errMsg}</p>}
				<SubmitTodoBtn className={styles.addTodoBtn} />
			</form>
		</>
	)
}
