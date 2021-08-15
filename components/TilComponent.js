import { getAllTil } from "../lib/tilApi";

export default async function TilComponent() {
	const tils = await getAllTil();

	return tils[0].content;
}
