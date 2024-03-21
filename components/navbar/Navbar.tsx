import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"

const navItems = [
	{ path: '/catalog', text: 'Catalog' },
	{ path: '/', text: 'Dynamic 1' },
	{ path: '/', text: 'Dynamic 2' },
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
						<Link className='mr-6' href={item.path}>{item.text}</Link>
					);
				}))
			}
		</nav>
	)
}
