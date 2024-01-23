import db from '@/lib/db-connect'
import { NextResponse } from 'next/server'

export async function GET(){
	let [_todoList] = await db.query('SELECT * FROM todo_list')
	console.log(_todoList)
	return NextResponse.json({
		call: 1,
		data: _todoList
	},{status: 201})
}