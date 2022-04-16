import sanityClient from '@sanity/client'

const options = {
	dataset: 'production',
	projectId: 'av1qyq1c',
	useCdn: process.env.NODE_ENV === 'production',
	apiVersion: '2021-08-15',
}

export default sanityClient(options)
