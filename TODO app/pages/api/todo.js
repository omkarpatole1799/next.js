import todo_list from "@/models/todo_list"
import { revalidatePath } from "next/cache"

// import todo_list from "@/models/todo_list"
export default function handler(req, res) {
	const { method } = req
	switch (method) {
		case "GET":
			getTodoList(req, res)
			break
		case "POST":
			postTodoList(req, res)
			break
		case "DELETE":
			deleteTodo(req, res)
			break
		default:
			break
	}
}

async function getTodoList(req, res) {
	let _todoList = await todo_list.findAll()
	res.status(200).json({
		call: 1,
		_todoList
	})
}

async function postTodoList(req, res) {
	let {name, description} = req.body
	let _todoCreateRes = await todo_list.create({
		todo_name: name, 
		todo_description: description
	})
	console.log(_todoCreateRes, '')
	res.status(201).json({
		call: 1, 
		_todoCreateRes
	})
}

async function deleteTodo(req, res) {
	let _id = +req.query.id
	console.log(_id, 'delete id')
	let _deleteTodoRes = await todo_list.destroy({
		where: {
			id: _id
		}
	})

	res.status(200).json({
		call: 1,
		_deleteTodoRes
	})
}
