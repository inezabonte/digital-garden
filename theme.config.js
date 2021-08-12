const description =
	"Digital Garden 🌱 - A bunch of pages created by Ineza that he finds useful";

const coverImage =
	"https://res.cloudinary.com/tizzertuna/image/upload/v1628785945/Articles/cover_xgtvmg.png";

export default {
	github: "https://github.com/inezabonte/digital-garden",
	docsRepositoryBase:
		"https://github.com/inezabonte/digital-garden/blob/main/pages",
	nextLinks: true,
	prevLinks: true,
	titleSuffix: "",
	logo: (
		<>
			<span className="mr-2 font-extrabold hidden md:inline">Ineza Bonté</span>
			<span className="text-gray-600 font-normal hidden md:inline">
				Welcome to my Digital Garden 🌳
			</span>
		</>
	),
	head: (
		<>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="description" content={description} />
			<meta name="og:description" content={description} />
			<meta property="og:image" content={coverImage} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta name="og:title" content="Ineza's Digital Garden🌱" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:creator" content="@inezabonte" />
			<meta name="twitter:site" content="@inezabonte" />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={coverImage} />
			<meta name="twitter:image:alt" content={description} />
		</>
	),
	search: false,
	footer: false,
	prevLinks: false,
	nextLinks: false,
};
