import Menu from "@/components/Menu";

export default function MainLayout({ children }) {
	return (
		<div className="flex  min-h-screen relative">
			<Menu />
			{children}
		</div>
	);
}
