import db from '@/lib/db-connect'
import { NextResponse } from 'next/server'

export async function GET(){
	let [_todoList] = await db.query('SELECT * FROM todo_list')
	return NextResponse.json({
		call: 1,
		data: _todoList
	},{status: 201})
}

export async function POST(req, res){
	let {name, description } = await req.json()
	let [_response] = await db.query(`INSERT INTO todo_list (todo_name, todo_description) VALUES (?, ?)`, [name, description])
	if (_response.affectedRows === 1) {
		return NextResponse.json({ 
			call: 1,
		}, {
			status: 201
		})
	}
}