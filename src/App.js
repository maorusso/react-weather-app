import "./App.css";
import Forecast1Day from "./Forecast1Day/Forecast1Day";
import { useState, useEffect } from "react";

function App() {
	const [forecast, setForecast] = useState([]);
	useEffect(() => {
		fetch("https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json")
			.then((res) => res.json())
			.then((data) => {
				setForecast(data);
			});
	}, []);

	return (
		<div className="App">
			{forecast.map((dailyForecast) => (
				<Forecast1Day
					day={dailyForecast.day}
					temperature={dailyForecast.temperature}
					icon={dailyForecast.icon}
					description={dailyForecast.description}
				/>
			))}
		</div>
	);
}

export default App;
