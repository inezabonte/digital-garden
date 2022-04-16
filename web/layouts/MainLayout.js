import Menu from "@/components/Menu";
import NavBar from "@/components/NavBar";

export default function MainLayout({ children }) {
	return (
		<div className="flex flex-col">
			<NavBar />
			<div className="flex flex-1 h-full max-w-7xl">
				<Menu />
				{children}
			</div>
		</div>
	);
}
