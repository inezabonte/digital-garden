import Layout from '@/layouts/MdxLayout'
import { parseMDXContent } from 'lib/mdx'
import { MDXRemote } from 'next-mdx-remote'
import { NextSeo } from 'next-seo'
import ImageGrid from '@/components/ImageGrid'
import { fetchGallery } from '../lib/api'
import Modal from '@/components/Modal'
import { useState } from 'react'

export default function Gallery({ mdxSource, images }) {
	const [selectedImg, setSelectedImg] = useState(null)
	return (
		<Layout>
			<NextSeo title={'Gallery | Digital Garden 🌱'} />
			<div className="max-w-full">
				<article className="prose dark:prose-dark">
					<MDXRemote {...mdxSource} />
				</article>
				<div>
					<ImageGrid images={images} setSelectedImg={setSelectedImg} />
				</div>
				{selectedImg && (
					<Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
				)}
			</div>
		</Layout>
	)
}

export async function getStaticProps() {
	const pageData = await parseMDXContent('gallery', 'content/pages')
	const images = await fetchGallery()

	return {
		props: {
			...pageData,
			images,
		},
		revalidate: 1,
	}
}
