import Head from "next/head";

export default function MetaData({ title }) {
	const description =
		"This is Ineza's Digital Garden 🌳 to which he adds resources, links and thoughts that are important to him ";

	const coverImage =
		"https://res.cloudinary.com/tizzertuna/image/upload/v1628785945/Articles/cover_xgtvmg.png";

	return (
		<Head>
			<title>{title ? title : "Digital Garden 🌱"}</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link rel="icon" href="/favicon.ico" />
			<meta name="description" content={description} />
			<meta name="og:description" content={description} />
			<meta property="og:image" content={coverImage} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta name="og:title" content="Ineza's Digital Garden🌳" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:creator" content="@inezabonte" />
			<meta name="twitter:site" content="@inezabonte" />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={coverImage} />
			<meta name="twitter:image:alt" content={description} />
		</Head>
	);
}
