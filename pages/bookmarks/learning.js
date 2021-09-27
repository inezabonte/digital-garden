import { NextSeo } from "next-seo";
import Layout from "@/layouts/MdxLayout";
import { parseMDXContent } from "lib/mdx";
import { MDXRemote } from "next-mdx-remote";

export default function Learning({ mdxSource }) {
	return (
		<Layout>
			<NextSeo title={"Learning 📚 | Digital Garden 🌱"} />
			<article className="prose prose-blue">
				<MDXRemote {...mdxSource} />
			</article>
		</Layout>
	);
}

export async function getStaticProps() {
	const pageData = await parseMDXContent("learning", "content/pages/bookmarks");
	return {
		props: {
			...pageData,
		},
	};
}
