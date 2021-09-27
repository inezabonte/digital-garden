const coverImage =
	"https://res.cloudinary.com/tizzertuna/image/upload/v1628785945/Articles/cover_xgtvmg.png";

const description =
	"This is Ineza's Digital Garden 🌳 to which he adds resources, links and thoughts that are important to him ";

export default {
	title: "Digital Garden 🌱",
	openGraph: {
		type: "website",
		url: "https://garden.ineza.codes/",
		site_name: "Digital Garden 🌱",
		description,
		images: [
			{
				url: coverImage,
				width: 1200,
				height: 630,
				alt: "Ineza's Digital Garden🌳",
			},
		],
	},
	twitter: {
		handle: "@inezabonte",
		site: "@inezabonte",
		cardType: "summary_large_image",
		images: [
			{
				url: coverImage,
				alt: "Ineza's Digital Garden🌳",
			},
		],
	},
	additionalMetaTags: [
		{
			rel: "icon",
			href: "/favicon.ico",
		},
	],
};
