import "styles/global.css";
import { DefaultSeo } from "next-seo";
import SEO from "seo.config";
import MenuProvider from "contexts/menu";

export default function Nextra({ Component, pageProps }) {
	return (
		<>
			<DefaultSeo {...SEO} />
			<MenuProvider>
				<Component {...pageProps} />
			</MenuProvider>
		</>
	);
}
