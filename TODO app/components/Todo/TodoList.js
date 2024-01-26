import styles from "@/components/Todo/TodoList.module.css"
import DeleteTodo from "./DeleteTodo"
import EditTodo from "./EditTodo"

async function getTodoList() {
	try {
		let res = await fetch("http://localhost:3000/api/todo", {
			method: "GET"
		})
		if (!res.ok) throw new Error("Failed to fetch todo list")

		return res.json()
	} catch (error) {
		return error.message
	}
}

export default async function TodoList() {
	let { _todoList } = await getTodoList()
	return (
		<>
			<ul className={styles.todoItems}>
				{_todoList.length === 0 && <p>Nothing but crickets here</p>}
				{_todoList.length > 0 &&
					_todoList.map((todo) => {
						return (
							<li key={todo.id} className={styles.todoItem}>
								<div>
									<h4>{todo.todo_name}</h4>
									<p>{todo.todo_description}</p>
								</div>
								<div>
									<DeleteTodo id={todo.id}></DeleteTodo>
									<EditTodo id={todo.id}></EditTodo>
								</div>
							</li>
						)
					})}
			</ul>
		</>
	)
}
