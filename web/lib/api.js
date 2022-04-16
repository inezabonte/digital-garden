import Client from './sanity'
import { serializeMDX } from './mdx'

export async function getAllLearningBookmarks() {
	const learning = await Client.fetch(
		`*[_type == "learning"] {name, link, description}`
	)
	return learning
}

export async function getAllDesignBookmarks() {
	const design = await Client.fetch(
		`*[_type == "design"] {name, link, description}`
	)

	return design
}

export async function getAllToolsBookmarks() {
	const tools = await Client.fetch(
		`*[_type == "tools"] {name, link, description}`
	)

	return tools
}

export async function getAllLibraryBookmarks() {
	const libraries = await Client.fetch(
		`*[_type == "library"] {name, link, description}`
	)

	return libraries
}

export async function getTilDates() {
	const results = await Client.fetch(
		`*[_type == "til" ] | order(date desc)[].date`
	)

	return results
}

export async function getTilByDate(date) {
	const results = await Client.fetch(
		`*[_type == 'til' && date == '${date}' ]{content}`
	)

	const serializedMDX = await serializeMDX(results[0].content)

	return serializedMDX
}

export async function fetchGallery() {
	const results = await Client.fetch(
		'*[_type == "gallery"] | order(date desc) {_id, date, caption, "image": image.asset->url, "dimensions": image.asset->metadata.dimensions}'
	)

	return results
}
