import sanityClient from "@sanity/client";

const options = {
	dataset: process.env.SANITY_DATASET_NAME,
	projectId: process.env.SANITY_PROJECT_ID,
	useCdn: process.env.NODE_ENV === "production",
	apiVersion: "2021-08-15",
};

export default sanityClient(options);
