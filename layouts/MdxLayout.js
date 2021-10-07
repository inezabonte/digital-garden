import MainLayout from "./MainLayout";

export default function MdxLayout({ children }) {
	return (
		<MainLayout>
			<div className="mt-8 md:mt-10 p-4 md:ml-64 lg:ml-0">{children}</div>
		</MainLayout>
	);
}
