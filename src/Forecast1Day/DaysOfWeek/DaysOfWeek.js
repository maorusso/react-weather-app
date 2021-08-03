export default function DaysOfWeek(props) {
	const days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	return <h3> {days[props.day]}</h3>;
}
