import Layout from '@/layouts/MdxLayout'
import { parseMDXContent } from 'lib/mdx'
import { MDXRemote } from 'next-mdx-remote'
import { getTilDates } from 'lib/api'
import { convertDate } from 'lib/date'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import useSWR, { SWRConfig } from 'swr'
import axios from 'axios'

export default function Til({ mdxSource, fallback }) {
	const fetcher = async () => {
		const { data } = await axios.get('api/tils')
		return data
	}

	function useTils() {
		const { data, error } = useSWR('api/tils', fetcher)
		return {
			tils: data,
			isLoading: !error && !data,
			isError: error,
		}
	}
	const { tils, isLoading, isError } = useTils()

	if (isLoading) return null

	return (
		<SWRConfig value={fallback}>
			<Layout>
				<NextSeo title={'Today I Learned | Digital Garden 🌱'} />
				<article className="prose prose-blue">
					<MDXRemote {...mdxSource} />
					<ul className="prose prose-blue">
						{tils.map((item) => (
							<li key={item}>
								<Link href={`/til/${item}`} key={item}>
									<a>{convertDate(item, 'PP')}</a>
								</Link>
							</li>
						))}
					</ul>
				</article>
			</Layout>
		</SWRConfig>
	)
}

export async function getStaticProps() {
	const pageData = await parseMDXContent('til', 'content/pages')
	const tils = await getTilDates()

	return {
		props: {
			fallback: {
				'api/tils': tils,
			},
			...pageData,
		},
	}
}
