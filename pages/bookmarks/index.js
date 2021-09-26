import Layout from "@/layouts/MdxLayout";
import MetaData from "@/components/MetaData";
import { parseMDXContent } from "lib/mdx";
import { MDXRemote } from "next-mdx-remote";

export default function Bookmarks({ mdxSource }) {
	return (
		<Layout>
			<MetaData title={"Bookmarks | Digital Garden 🌱"} />
			<article className="prose prose-blue">
				<MDXRemote {...mdxSource} />
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
	};
}
