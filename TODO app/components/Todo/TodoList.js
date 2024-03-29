import styles from "@/components/Todo/TodoList.module.css"
import DeleteTodo from "./DeleteTodo"
import { getTodoList } from "@/lib/todoServerAction"
import EditTodoBtn from "./EditTodoBtn"

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
									<EditTodoBtn id={todo.id}></EditTodoBtn>
								</div>
							</li>
						)
					})}
			</ul>
		</>
	)
}
