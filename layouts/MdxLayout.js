import MainLayout from "./MainLayout";

export default function MdxLayout({ children }) {
	return (
		<MainLayout>
			<div className="mt-8 md:mt-16 p-4">{children}</div>
		</MainLayout>
	);
}
