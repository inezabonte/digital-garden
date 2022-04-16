export default {
	name: "til",
	title: "TIL",
	type: "document",
	fields: [
		{
			name: "date",
			title: "Date",
			type: "date",
		},
		{
			name: "content",
			title: "Content",
			type: "markdown",
		},
	],
	preview: {
		select: {
			title: "date",
		},
	},
};
