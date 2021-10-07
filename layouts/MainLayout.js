import Menu from "@/components/Menu";
import NavBar from "@/components/NavBar";

export default function MainLayout({ children }) {
	return (
		<div className="flex flex-col">
			<NavBar />
			<div className="flex justify-center">
				<Menu />
				{children}
			</div>
		</div>
	);
}
