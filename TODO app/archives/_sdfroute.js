import todo_list from "@/models/todo_list"
import { NextResponse } from "next/server"
import { revalidatePath } from "next/cache"

export async function GET() {
	let _todoList = await todo_list.findAll()
	return NextResponse.json({
		call: 1,
		data: _todoList
	})
}

export async function POST(req, res) {
	let { name, description } = await req.json()

	let _createResponse = await todo_list.create({
		todo_name: name,
		todo_description: description
	})

	revalidatePath("/todo/list")

	return NextResponse.json(
		{
			call: 1
		},
		{
			status: 201
		}
	)
}

export async function DELETE(req, res) {
	const deleteId = req.nextUrl.searchParams.get("id")
	let _deleteResult = await todo_list.destroy({
		where: {
			id: deleteId
		}
	})
	console.log(_deleteResult, "delete result")
	return NextResponse.json(
		{
			call: 1
		},
		{ status: 200 }
	)
}
