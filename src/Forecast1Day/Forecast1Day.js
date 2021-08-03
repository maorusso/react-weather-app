import "../Forecast1Day/Forecast1Day.css";
import DaysOfWeek from "./DaysOfWeek/DaysOfWeek";

export default function Forecast1Day(props) {
	return (
		<div className="container">
			<DaysOfWeek day={props.day} />
			<img src={require(`../icons/${props.icon}.png`).default} alt="icon" />

			<div>
				<span className="temp">{props.temperature}°c</span>
				<span className="description"> {props.description}</span>
			</div>
		</div>
	);
}
