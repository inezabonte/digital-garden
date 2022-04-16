import 'styles/global.css'
import { DefaultSeo } from 'next-seo'
import SEO from 'seo.config'
import MenuProvider from 'contexts/menu'
import { ThemeProvider } from 'next-themes'

export default function Nextra({ Component, pageProps }) {
	return (
		<>
			<DefaultSeo {...SEO} />
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem="true"
			>
				<MenuProvider>
					<Component {...pageProps} />
				</MenuProvider>
			</ThemeProvider>
		</>
	)
}
