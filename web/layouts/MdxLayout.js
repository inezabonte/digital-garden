import MainLayout from "./MainLayout";

export default function MdxLayout({ children }) {
	return (
		<MainLayout>
			<div className=" p-4 mx-auto max-w-full">{children}</div>
		</MainLayout>
	);
}
