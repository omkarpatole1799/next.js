import Link from "next/link";
import brandLogo from '@/assets/logo.png'
import Image from "next/image";

import './HeaderCom.css'
export default function HeaderCom(){
	return <>
	<header>

		<Link href='/'>
			<Image className="brand-logo" src={brandLogo} alt="brand logo"/>
		</Link>

		<ul className="nav-items">
			<li className="nav-item">
				<Link href='/meals' className="nav-link">Meals</Link>
			</li>

			<li className="nav-item">
				<Link href='/community' className="nav-link">Community</Link>
			</li>
		</ul>
	</header>	
	</>
}