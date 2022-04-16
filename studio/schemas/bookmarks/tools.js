export default {
	name: "tools",
	title: "Tools",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string",
			description: "Name of the tool you would like to add",
		},
		{
			name: "link",
			title: "Link",
			type: "url",
			description: "Link to the tool",
		},
		{
			name: "description",
			title: "Description",
			type: "string",
			description: "Tell us more about the tool",
		},
	],
};
