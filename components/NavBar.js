import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { IoMdMoon } from "react-icons/io";
import { HiSun } from "react-icons/hi";

export default function NavBar() {
	useEffect(() => setMounted(true), []);

	const [mounted, setMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();

	const switchTheme = () => {
		setTheme(resolvedTheme === "dark" ? "light" : "dark");
	};

	if (!mounted) return null;

	return (
		<nav className="p-2">
			<div className="space-x-4 flex items-center justify-self-end lg:order-1">
				<button
					className="focus:outline-none outline-none"
					onClick={switchTheme}
					role="img"
					aria-labelledby="theme-switcher"
					type="button"
				>
					<title id="theme-switcher">
						{resolvedTheme === "dark"
							? "Switch to light mode"
							: "Switch to dark mode"}
					</title>
					{resolvedTheme === "dark" ? (
						<HiSun className="h-6 w-6" />
					) : (
						<IoMdMoon className="h-6 w-6" />
					)}
				</button>
			</div>
		</nav>
	);
}
