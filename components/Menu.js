import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { MenuContext } from 'contexts/menu'

export default function Menu() {
	const router = useRouter()

	const [openMenu, setOpenMenu] = useContext(MenuContext)

	useEffect(() => {
		setOpenMenu(false)
		document.body.classList.remove('overflow-hidden')
	}, [])

	return (
		<nav
			className={`w-screen ${
				!openMenu ? 'hidden' : ''
			} md:block  md:w-56 p-4  border-r border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 fixed left-0 top-0 h-screen bg-gray-100 dark:bg-dark-body z-10 flex-shrink-0 md:sticky `}
			style={{
				top: '3.5rem',
				height: 'calc(100vh - 3.5rem)',
			}}
		>
			<div className="flex flex-col space-y-3">
				<Link href="/">
					<a
						className={`navLink ${
							router.pathname == '/' ? 'selectedLink' : ''
						}`}
					>
						About My Garden 🌱
					</a>
				</Link>
				<Link href="/til">
					<a
						className={`navLink ${
							router.pathname.includes('/til') ? 'selectedLink' : ''
						}`}
					>
						Today I Learned 📝
					</a>
				</Link>
				<Link href="/bookmarks">
					<a
						className={`navLink ${
							router.pathname.includes('/bookmarks') ? 'selectedLink' : ''
						}`}
					>
						Bookmarks 🔖
					</a>
				</Link>
				<Link href="/gallery">
					<a
						className={`navLink ${
							router.pathname.includes('/gallery') ? 'selectedLink' : ''
						}`}
					>
						Gallery 📸
					</a>
				</Link>
			</div>
		</nav>
	)
}
