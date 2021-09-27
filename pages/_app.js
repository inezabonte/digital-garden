import "styles/global.css";
import { DefaultSeo } from "next-seo";
import SEO from "seo.config";

export default function Nextra({ Component, pageProps }) {
	return (
		<>
			<DefaultSeo {...SEO} />
			<Component {...pageProps} />
		</>
	);
}
