import { NextSeo } from "next-seo";
import Layout from "@/layouts/MdxLayout";
import { parseMDXContent } from "lib/mdx";
import { MDXRemote } from "next-mdx-remote";
import { getAllDesignBookmarks } from "lib/api";
import { HiExternalLink } from "react-icons/hi";

export default function Design({ mdxSource, bookmarks }) {
	return (
		<Layout>
			<NextSeo title={"Design 🎨 | Digital Garden 🌱"} />
			<article className="prose">
				<MDXRemote {...mdxSource} />
			</article>
			<div className="space-y-6 mt-4">
				{bookmarks.map((item) => (
					<div key={item.link}>
						<h3 className="text-xl font-bold">{item.name}</h3>
						<span className="text-gray-600 dark:text-gray-400">
							{item.description}
						</span>
						<a
							href={item.link}
							className="flex items-center text-blue-600 underline"
							target="_blank"
						>
							<span>Link</span>
							<HiExternalLink />
						</a>
					</div>
				))}
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	const pageData = await parseMDXContent("design", "content/pages/bookmarks");
	const bookmarks = await getAllDesignBookmarks();
	return {
		props: {
			...pageData,
			bookmarks,
		},
		revalidate: 1,
	};
}
