import MdxLayout from '@/layouts/MdxLayout'
import { getTilDates, getTilByDate } from 'lib/api'
import { MDXRemote } from 'next-mdx-remote'
import useSWR, { SWRConfig } from 'swr'
import { useRouter } from 'next/router'
import axios from 'axios'

export default function slugTil({ fallback }) {
	const router = useRouter()
	const { slug } = router.query

	const fetcher = async () => {
		const { data } = await axios.get(`/api/tils?date=${slug}`)

		return data
	}

	function useSingleDate() {
		const { data, error } = useSWR(`api/tils?date=${slug}`, fetcher)
		return {
			til: data,
			isLoading: !error && !data,
			isError: error,
		}
	}

	const { til, isLoading } = useSingleDate()

	if (isLoading) {
		return null
	}

	return (
		<SWRConfig value={fallback}>
			<MdxLayout>
				<article className="prose prose-blue">
					<MDXRemote {...til} />
				</article>
			</MdxLayout>
		</SWRConfig>
	)
}

export async function getStaticPaths() {
	const paths = await getTilDates()

	return {
		paths: paths.map((slug) => ({ params: { slug } })),
		fallback: false,
	}
}

export async function getStaticProps({ params }) {
	const til = await getTilByDate(params.slug)

	return {
		props: {
			fallback: {
				[`api/tils?date=${params.slug}`]: til,
			},
		},
	}
}
