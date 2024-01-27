'use client'
import { useFormState } from "react-dom"
import styles from "./AddTodo.module.css"
import { postTodoList } from "@/lib/todoServerAction"
import SubmitTodoBtn from "./SubmitTodoBtn"

export default function AddTodo() {
	const [state, formAction] = useFormState(postTodoList, { errMsg: null })
	return (
		<>
			<form action={formAction} className={styles.addTodoForm}>
				<input className={styles.todoInput} type="text" name="todoName" placeholder="todo" />
				<input
					className={styles.todoInput}
					type="text"
					name="todoDescription"
					placeholder="description"
				/>
				{state.errMsg && <p>{state.errMsg}</p>}
				<SubmitTodoBtn className={styles.addTodoBtn} />
			</form>
		</>
	)
}
