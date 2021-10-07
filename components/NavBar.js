import { useState, useEffect, useContext } from "react";
import { useTheme } from "next-themes";
import { IoMdMoon } from "react-icons/io";
import { HiSun } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";
import { MenuContext } from "contexts/menu";

export default function NavBar() {
	useEffect(() => setMounted(true), []);

	const [mounted, setMounted] = useState(false);
	const [openMenu, setOpenMenu] = useContext(MenuContext);

	const openNav = () => {
		if (openMenu == false) {
			setOpenMenu(true);
			document.body.classList.add("overflow-hidden");
		} else {
			setOpenMenu(false);
			document.body.classList.remove("overflow-hidden");
		}
	};

	const { resolvedTheme, setTheme } = useTheme();

	const switchTheme = () => {
		setTheme(resolvedTheme === "dark" ? "light" : "dark");
	};

	if (!mounted) return null;

	return (
		<nav className="p-4 border-b border-gray-200 h-14 top-0 sticky bg-gray-100 z-10">
			<div className="flex items-center justify-between">
				<span className="font-medium text-lg">Ineza's Digital Garden 🌳</span>

				<div>
					<button className="md:hidden" onClick={openNav}>
						<FiMenu className="h-6 w-6" />
					</button>
				</div>
			</div>
		</nav>
	);
}
