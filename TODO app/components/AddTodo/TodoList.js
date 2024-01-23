import styles from '@/components/AddTodo/TodoList.module.css'
import {MdDeleteForever} from 'react-icons/md'
import {MdModeEdit} from 'react-icons/md'

async function getTodoList(){
	try {
		let res = await fetch('http://localhost:3000/api/todo')
		if (!res.ok) throw new Error('Failed to fetch todo list')

		return res.json()
	} catch (error) {
		return error.message	
	}
}

export default async function TodoList(){
	let {data: _todoList} = await getTodoList() 

	return <>
		<ul className={styles.todoItems}>
			{_todoList.map(todo=>{
				return <li className={styles.todoItem}>
					<div>
						<h4>
							{todo.todo_name}
						</h4>
						<p>
							{todo.todo_description}
						</p>
					</div>
					<div>
						<MdDeleteForever/>
						<MdModeEdit/>
					</div>
				</li>
			})}
		</ul>	
	</>
}