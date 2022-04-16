import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import mdxPrism from "mdx-prism";

export async function parseMDXContent(id, fileDirectory) {
	const dir = path.join(process.cwd(), fileDirectory);
	const fullPath = path.join(dir, `${id}.mdx`);
	const fileContents = fs.readFileSync(fullPath, "utf-8");

	const { data, content } = matter(fileContents);

	const mdxSource = await serializeMDX(content, data);
	return {
		id,
		mdxSource,
	};
}

export async function serializeMDX(content, data) {
	const mdxSource = await serialize(content, {
		mdxOptions: {
			rehypePlugins:[mdxPrism]
		},
		scope: data,
	});

	return mdxSource;
}
