import Layout from '@/layouts/MdxLayout'
import { parseMDXContent } from 'lib/mdx'
import { MDXRemote } from 'next-mdx-remote'
import { NextSeo } from 'next-seo'

export default function About({ mdxSource }) {
	return (
		<Layout>
			<NextSeo title={'About | Digital Garden 🌱'} />
			<article className="prose dark:prose-dark">
				<MDXRemote {...mdxSource} />
			</article>
		</Layout>
	)
}

export async function getStaticProps() {
	const pageData = await parseMDXContent('about', 'content/pages')
	return {
		props: {
			...pageData,
		},
	}
}
