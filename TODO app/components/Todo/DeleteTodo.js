"use client"
import { useRouter } from "next/navigation"
import { MdDeleteForever } from "react-icons/md"

export default function DeleteTodo({ id }) {
	const router = useRouter()
	async function handleDelete() {
		let _deleteRes = await fetch("/api/todo", {
			method: "DELETE",
			body: JSON.stringify({ id })
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
