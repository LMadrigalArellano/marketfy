import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from "..";

const navItems = [
	{ path: '/catalog', text: 'Catalog' },
	{ path: '/a', text: 'Dynamic 1' },
	{ path: '/b', text: 'Dynamic 2' },
];

export const Navbar = () => {
	return (
		<nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
			<Link href={'/'} className='flex items-center'>
				<HomeIcon className='mr-2'/>
				<span>Home</span>
			</Link>

			<div className='flex flex-1'></div>

			{
				navItems.map(( item => {
					return  (
						<ActiveLink key={item.path} path={item.path} text={item.text}/>
					);
				}))
			}
		</nav>
	)
}
