export default {
	name: 'gallery',
	title: 'Gallery',
	type: 'document',
	fields: [
		{
			name: 'date',
			title: 'Date',
			type: 'date',
		},
		{
			name: 'caption',
			title: 'Caption',
			type: 'string',
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
		},
	],
	preview: {
		select: {
			title: 'date',
		},
	},
}
