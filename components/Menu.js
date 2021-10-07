import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { MenuContext } from "contexts/menu";

export default function Menu() {
	const router = useRouter();

	const [openMenu, setOpenMenu] = useContext(MenuContext);

	useEffect(() => {
		setOpenMenu(false);
		document.body.classList.remove("overflow-hidden");
	}, []);

	return (
		<nav
			className={`w-screen ${
				!openMenu ? "hidden" : ""
			} md:block  md:w-56 p-4  border-r border-gray-200 text-gray-600 fixed left-0 top-14 h-screen bg-gray-100 z-10 `}
		>
			<div className="flex flex-col space-y-3">
				<Link href="/">
					<a
						className={`navLink ${
							router.pathname == "/" ? "selectedLink" : ""
						}`}
					>
						About My Garden 🌱
					</a>
				</Link>
				<Link href="/til">
					<a
						className={`navLink ${
							router.pathname.includes("/til") ? "selectedLink" : ""
						}`}
					>
						Today I Learned 📝
					</a>
				</Link>
				<Link href="/bookmarks">
					<a
						className={`navLink ${
							router.pathname.includes("/bookmarks") ? "selectedLink" : ""
						}`}
					>
						Bookmarks 🔖
					</a>
				</Link>
			</div>
		</nav>
	);
}
