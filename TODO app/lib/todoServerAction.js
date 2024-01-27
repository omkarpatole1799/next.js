"use server"

import todo_list from "@/models/todo_list"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function getTodoList() {
	let _todoList = await todo_list.findAll()
	return {
		call: 1,
		_todoList
	}
}

export async function postTodoList(prevState, formData) {
	let name = formData.get("todoName")
	let description = formData.get("todoDescription")

	if (name === "" || description === "") {
		return {
			errMsg: "Input's should not be empty."
		}
	}

	let _todoCreateRes = await todo_list.create({
		todo_name: name,
		todo_description: description
	})
	console.log(_todoCreateRes, "---")
	revalidatePath("/todo/list")
	redirect("/todo/list")
}

export async function updateTodo(prevState, formData) {
	let id = formData.get("id")
	let name = formData.get("todoName")
	let description = formData.get("todoDescription")

	if (name === "" || description === "") {
		return {
			errMsg: "Input's should not be empty."
		}
	}

	let _updateTodoRes = await todo_list.update(
		{
			todo_name: name,
			todo_description: description
		},
		{
			where: {
				id: id
			}
		}
	)
	console.log(_updateTodoRes, "update todo res")

	revalidatePath("/todo/list")
	redirect("/todo/list")
}

export async function deleteTodo(req, res) {
	let _id = +req.query.id
	console.log(_id, "delete id")
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

export async function getSingleTodoData(_id) {
	let _todoData = await todo_list.findOne({
		attributes: [
			["todo_name", "todoName"],
			["todo_description", "todoDescription"]
		],
		where: {
			id: _id
		}
	})
	return {
		call: 1,
		_todoData
	}
}
