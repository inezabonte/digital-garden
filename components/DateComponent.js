import { format, parseISO } from "date-fns";

export default function DateComponent({ date, displayFormat }) {
	const formattedDate = format(new Date(parseISO(date)), displayFormat);
	return <h2>{formattedDate}</h2>;
}
