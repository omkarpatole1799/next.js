"use client"
import { deleteTodo } from "@/lib/todoServerAction"
import { useRouter } from "next/navigation"
import { MdDeleteForever } from "react-icons/md"

export default function DeleteTodo({ id }) {
	const router = useRouter()
	async function handleDelete() {
		let confirmed = confirm("Do you want to delte todo!")
		if (!confirmed) return
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

				if (_deleteRes.call === 1) {
					router.refresh()
				}
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
