import Link from "next/link";
import brandLogo from '@/assets/logo.png'

export default function HeaderCom(){
	return <>
	<header>

		<Link href='/'>
			A foodies app
			<img src={brandLogo.src} alt="" />
		</Link>

		<ul>
			<li>

		<Link href='/meals'>Meals</Link>
			</li>

			<li>


		<Link href='/community'>Community</Link>
			</li>
		</ul>
	</header>	
	</>
}