import Layout from "@/layouts/MdxLayout";
import { parseMDXContent } from "lib/mdx";
import { MDXRemote } from "next-mdx-remote";
import { NextSeo } from "next-seo";
import LinkComponent from "@/components/LinkComponent";

export default function Bookmarks({ mdxSource }) {
	return (
		<Layout>
			<NextSeo title={"Bookmarks | Digital Garden 🌱"} />
			<article className="prose prose-blue">
				<MDXRemote {...mdxSource} />
				<ul>
					<li>
						<LinkComponent href="/bookmarks/learning">
							Learning 📚
						</LinkComponent>
					</li>
					<li>
						<LinkComponent href="/bookmarks/design">Design 🎨</LinkComponent>
					</li>
					<li>
						<LinkComponent href="/bookmarks/tools">Tools ⚙️</LinkComponent>
					</li>
					<li>
						<LinkComponent href="/bookmarks/library">
							Libraries 🧰
						</LinkComponent>
					</li>
				</ul>
			</article>
		</Layout>
	);
}

export async function getStaticProps() {
	const pageData = await parseMDXContent("bookmarks", "content/pages");
	return {
		props: {
			...pageData,
		},
		revalidate: 1,
	};
}
