import todo_list from "@/models/todo_list"

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

function postTodoList(req, res) {
	let {name, descri}
}

function deleteTodo(req, res) {}
