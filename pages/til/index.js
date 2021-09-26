import Layout from "@/layouts/MdxLayout";
import MetaData from "@/components/MetaData";
import { parseMDXContent } from "lib/mdx";
import { MDXRemote } from "next-mdx-remote";

export default function Til({ mdxSource }) {
	return (
		<Layout>
			<MetaData title={"About | Digital Garden 🌱"} />
			<article className="prose prose-blue">
				<MDXRemote {...mdxSource} />
			</article>
		</Layout>
	);
}

export async function getStaticProps() {
	const pageData = await parseMDXContent("til", "content/pages");
	return {
		props: {
			...pageData,
		},
	};
}
