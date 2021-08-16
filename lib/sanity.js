import sanityClient from "@sanity/client";

const { SANITY_DATASET_NAME, SANITY_PROJECT_ID, NODE_ENV, SANITY_API_VERSION } =
	process.env;

const options = {
	dataset: SANITY_DATASET_NAME,
	projectId: SANITY_PROJECT_ID,
	useCdn: NODE_ENV === "production",
	apiVersion: SANITY_API_VERSION,
};

export default sanityClient(options);
