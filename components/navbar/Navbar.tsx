'use client'

import Link from "next/link"
import { ActiveLink } from "..";
import { GoHome } from "react-icons/go";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { toggleMenu } from "@/store/ui/sideMenuSlice";


const navItems = [
	{ path: '/catalog', text: 'Catalog' },
	{ path: '/a', text: 'Dynamic 1' },
	{ path: '/b', text: 'Dynamic 2' },
];

export const Navbar = () => {

	const dispatch = useDispatch();

	return (
		<nav className='flex px-5 justify-between items-center w-full'>
			<Link href={'/'} className='flex items-center'>
				<GoHome className='mr-2'/>
				<span>Marketfy</span>
			</Link>

			<div className="hidden sm:block">
				{
					navItems.map(( item => {
						return  (
							<ActiveLink key={item.path} path={item.path} text={item.text}/>
						);
					}))
				}
			</div>
			<div className="flex items-center">
				<Link href='/search' className="mx-2">
					<IoSearchOutline className="w-5 h-5"/>
				</Link>
				<Link href='/cart' className="mx-2 hover:bg-gray-100">
					<div className="relative ">
						<span className="absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-blue-700 text-white ">
							3
						</span>
							<IoCartOutline className="w-5 h-5"/>
					</div>
				</Link>

				<button 
					className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
					onClick={() => dispatch( toggleMenu() )}
				>
					Menu
				</button>
			</div>
		</nav>
	)
}
