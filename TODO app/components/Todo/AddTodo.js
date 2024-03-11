"use client"
import { useFormState } from "react-dom"
import styles from "./AddTodo.module.css"
import { postTodoList } from "@/lib/todoServerAction"
import SubmitTodoBtn from "./SubmitTodoBtn"

export default function AddTodo() {
	const [state, formAction] = useFormState(postTodoList, {
		nameErr: null,
		descErr: null,
		otherErr: null
	})

	return (
		<>
			<form action={formAction} className={styles.addTodoForm}>
				<input className={styles.todoInput} type="text" name="todoName" placeholder="todo" />
				{state.nameErr && <p>{state.nameErr}</p>}
				<input
					className={styles.todoInput}
					type="text"
					name="todoDescription"
					placeholder="description"
				/>
				{state.descErr && <p>{state.descErr}</p>}

				{state.otherErr && <p>{state.otherErr}</p>}
				<SubmitTodoBtn className={styles.addTodoBtn} />
			</form>
		</>
	)
}
