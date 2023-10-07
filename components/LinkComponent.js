import Link from "next/link";

export default function LinkComponent({ children, href }) {
	return (
		<Link href={href}>
			<a>{children}</a>
		</Link>
	);
}
