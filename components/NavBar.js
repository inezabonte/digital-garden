import { useState, useEffect, useContext } from 'react'
import { useTheme } from 'next-themes'
import { IoMdMoon } from 'react-icons/io'
import { HiSun } from 'react-icons/hi'
import { FiMenu } from 'react-icons/fi'
import { MenuContext } from 'contexts/menu'

export default function NavBar() {
	useEffect(() => setMounted(true), [])

	const [mounted, setMounted] = useState(false)
	const [openMenu, setOpenMenu] = useContext(MenuContext)

	const openNav = () => {
		if (openMenu == false) {
			setOpenMenu(true)
			document.body.classList.add('overflow-hidden')
		} else {
			setOpenMenu(false)
			document.body.classList.remove('overflow-hidden')
		}
	}

	const { resolvedTheme, setTheme } = useTheme()

	const switchTheme = () => {
		setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
	}

	if (!mounted) return null

	return (
		<nav className="p-4 border-b border-gray-200 dark:border-gray-800 h-14 top-0 sticky bg-gray-100 dark:bg-dark-body z-10 ">
			<div className="flex items-center justify-between">
				<span className="font-medium text-lg">Ineza's Digital Garden 🌳</span>

				<div className="space-x-4">
					<button
						className="focus:outline-none outline-none"
						onClick={switchTheme}
						role="img"
						aria-labelledby="theme-switcher"
						type="button"
					>
						<title id="theme-switcher">
							{resolvedTheme === 'dark'
								? 'Switch to light mode'
								: 'Switch to dark mode'}
						</title>
						{resolvedTheme === 'dark' ? (
							<HiSun className="h-6 w-6" />
						) : (
							<IoMdMoon className="h-6 w-6" />
						)}
					</button>
					<button className="md:hidden" onClick={openNav}>
						<FiMenu className="h-6 w-6" />
					</button>
				</div>
			</div>
		</nav>
	)
}
