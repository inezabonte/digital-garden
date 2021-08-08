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
			<meta
				name="description"
				content="Digital Garden 🌱 - A bunch of pages created by Ineza that he finds useful"
			/>
			<meta name="og:title" content="Ineza's Digital Garden🌱" />
		</>
	),
	search: false,
	footer: false,
};
