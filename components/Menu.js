import Link from "next/link";
import { useRouter } from "next/router";

export default function Menu() {
	const router = useRouter();

	return (
		<nav className="w-56 p-4 border border-r border-gray-300 text-gray-600 sticky">
			<div className="flex flex-col space-y-3">
				<Link href="/about">
					<a
						className={`navLink ${
							router.pathname.includes("/about") ? "selectedLink" : ""
						}`}
					>
						About My Garden 🌳
					</a>
				</Link>
				<Link href="/til">
					<a
						className={`navLink ${
							router.pathname.includes("/til") ? "selectedLink" : ""
						}`}
					>
						Today I Learned 🗓
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
