import { MdModeEdit } from "react-icons/md"
import Link from "next/link"
export default function EditTodoBtn(props) {
	return (
		<>
			<Link href={`/todo/edit/${props.id}`}>
				<MdModeEdit />
			</Link>
		</>
	)
}
