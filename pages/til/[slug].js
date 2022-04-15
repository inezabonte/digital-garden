import MdxLayout from "@/layouts/MdxLayout";
import { getTilDates, getTilByDate } from "lib/api";
import { MDXRemote } from "next-mdx-remote";

export default function slugTil({ til }) {
	return (
		<MdxLayout>
			<article className="prose">
				<MDXRemote {...til} />
			</article>
		</MdxLayout>
	);
}

export async function getStaticPaths() {
	const paths = await getTilDates();

	return {
		paths: paths.map((slug) => ({ params: { slug } })),
		fallback: 'blocking',
	};
}

export async function getStaticProps({ params }) {
	const til = await getTilByDate(params.slug);

	return {
		props: {
			til,
		},
		revalidate: 1,
	};
}
