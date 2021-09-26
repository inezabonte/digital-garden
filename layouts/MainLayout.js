import NavBar from "@/components/NavBar";

export default function MainLayout({ children }) {
	return (
		<div className="flex flex-col min-h-screen m-auto max-w-3xl">
			{children}
		</div>
	);
}
