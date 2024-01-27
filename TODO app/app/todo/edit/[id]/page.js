import EditTodoForm from "@/components/Todo/EditTodoForm"
import { getSingleTodoData } from "@/lib/todoServerAction"
export default async function EditTodo({ params }) {
	let { _todoData } = await getSingleTodoData(+params.id)
	_todoData.id = +params.id
	return (
		<>
			<EditTodoForm todoData={_todoData} />
		</>
	)
}
