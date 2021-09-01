import Client from "./sanity";
import { serialize } from "next-mdx-remote/serialize";

export async function getAllTils() {
	const results = await Client.fetch(
		`*[_type == "til"] | order(date desc) {date, content}`
	);

	for (let i = 0; i < results.length; i++) {
		results[i].content = await serialize(results[i].content);
	}

	return results;
}

export async function getAllLearningBookmarks() {
	const learning = await Client.fetch(
		`*[_type == "learning"] {name, link, description}`
	);
	return learning;
}

export async function getAllDesignBookmarks() {
	const design = await Client.fetch(
		`*[_type == "design"] {name, link, description}`
	);

	return design;
}

export async function getAllToolsBookmarks() {
	const tools = await Client.fetch(
		`*[_type == "tools"] {name, link, description}`
	);

	return tools;
}
