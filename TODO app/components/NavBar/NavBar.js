'use client'

import Link from "next/link";
import classes from "@/app/page.module.css"
import { usePathname } from "next/navigation";

export default function NavBar(){
	const path = usePathname()
	return <>
		<ul className={classes.navItems}>
			<li className={classes.navItem}><Link className={path.endsWith('/') ? classes.navItemActive : undefined} href='/'>Home</Link></li>		
			<li className={classes.navItem}><Link className={path.endsWith('/todo/add') ? classes.navItemActive : undefined} href='/todo/add'>Add Todo</Link></li>		
			<li className={classes.navItem}><Link className={path.endsWith('/todo/list') ? classes.navItemActive : undefined} href='/todo/list'>Todo List</Link></li>		
		</ul>	
	</>
}