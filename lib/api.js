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
