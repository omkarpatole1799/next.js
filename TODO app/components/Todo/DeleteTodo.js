"use client"

import { MdDeleteForever } from "react-icons/md"

export default function DeleteTodo({ id }) {
	async function handleDelete() {
		await fetch(`/api/todo?id=${id}`, {
			method: "DELETE"
		})
			.then((result) => {
				return result.json()
			})
			.then((_deleteRes) => {
				_deleteRes.call === 1
					? alert("Delete successful")
					: alert("Not deleted, Something went wrong")
			})
	}

	return (
		<>
			<button onClick={handleDelete}>
				<MdDeleteForever />
			</button>
		</>
	)
}
