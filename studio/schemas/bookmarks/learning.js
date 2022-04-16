export default {
	name: "learning",
	title: "Learning",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string",
			description: "Name of the learning resource you would like to add",
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
