import MdxLayout from "@/layouts/MdxLayout";
import Link from "next/link";

export default function Home() {
	return (
		<MdxLayout>
			<main className="min-h-screen flex flex-col justify-center items-center m-auto space-y-6 p-2">
				<div>
					<h1 className="text-2xl md:text-4xl font-bold">
						Ineza's Digital Garden 🌱
					</h1>
				</div>
				<div className="flex flex-col text-lg text-gray-700 space-y-2 items-center">
					<Link href="/about">
						<a>About My Garden 🌳</a>
					</Link>
					<Link href="/til">
						<a>Today I Learned 📝</a>
					</Link>
					<Link href="/bookmarks">
						<a>Bookmarks 🔖</a>
					</Link>
				</div>
			</main>
		</MdxLayout>
	);
}
