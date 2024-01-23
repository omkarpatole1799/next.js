import styles from '@/components/AddTodo/TodoList.module.css'

export default async function TodoList(){
	let todoList = []
	todoList = await fetch('http://localhost:3000/api/todo')

	return <>
		<ul className={styles.todoItems}>
			{todoList.map((el)=>{
				return <li className={styles.todoItem}>{el.todoName}</li>		
			})}
		</ul>	
	</>
}