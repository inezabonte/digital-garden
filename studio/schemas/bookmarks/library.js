export default {
	name: "library",
	title: "Library",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string",
			description: "Name of the library resource you would like to add",
		},
		{
			name: "link",
			title: "Link",
			type: "url",
			description: "Link to the resource",
		},
		{
			name: "description",
			title: "Description",
			type: "string",
			description: "Tell us more about the resource",
		},
	],
};
