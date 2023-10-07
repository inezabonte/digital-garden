import Layout from '@/layouts/MdxLayout'
import { parseMDXContent } from 'lib/mdx'
import { MDXRemote } from 'next-mdx-remote'
import { getTilDates } from 'lib/api'
import { convertDate } from 'lib/date'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

export default function Til({ mdxSource, TilDates }) {
	return (
		<Layout>
			<NextSeo title={'Today I Learned | Digital Garden 🌱'} />
			<article className="prose dark:prose-dark">
				<MDXRemote {...mdxSource} />
				<ul>
					{TilDates.map((item) => (
						<li key={item}>
							<Link href={`/til/${item}`} key={item}>
								<a>{convertDate(item, 'PP')}</a>
							</Link>
						</li>
					))}
				</ul>
			</article>
		</Layout>
	)
}

export async function getStaticProps() {
	const pageData = await parseMDXContent('til', 'content/pages')
	const TilDates = await getTilDates()
	return {
		props: {
			...pageData,
			TilDates,
		},
		revalidate: 1,
	}
}
