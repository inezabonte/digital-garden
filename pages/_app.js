import "styles/global.css";
import { ThemeProvider } from "next-themes";

export default function Nextra({ Component, pageProps }) {
	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem="true">
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
