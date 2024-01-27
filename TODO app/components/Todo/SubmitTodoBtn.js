"use client"
import { useFormStatus } from "react-dom"

export default function SubmitTodoBtn(props) {
	const { pending } = useFormStatus()
	return (
		<button className={props.className} disabled={pending}>
			{pending ? "Adding..." : "Add"}
		</button>
	)
}
