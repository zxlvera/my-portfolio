import { useState, useEffect } from "react";
import axios from "axios";
import WeatherIcon from "react-icons-weather";

function Weather() {
	let [weather, setWeather] = useState("");
	let [temp, setTemp] = useState("");

	useEffect(() => {
		const date = new Date().toLocaleDateString("en-CA");
		let url = "https://api.data.gov.sg/v1/environment";
		let updatedTime = [];
		let currentTime = new Date();

		url = url + "/24-hour-weather-forecast?date=" + date;
		currentTime = currentTime.toISOString();

		axios
			.get(url)
			.then(function (response) {
				console.log(response);
				//
				// Compare timings with current time
				response.data.items.forEach((element, index) => {
					if (element.update_timestamp > currentTime) {
						updatedTime.push(index);
					}
				});
				// Get latest weather forecast
				let data = response.data.items[[...updatedTime].pop()];
				setWeather(data.general.forecast);
				setTemp(data.general.temperature);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			});
	}, []);

	return (
		<div className="pt-4 container flex flex-col mx-auto w-full items-center justify-start">
			<h1 className="text-6xl font-normal leading-normal mt-0 mb-2 text-blueGray-800">
				Weather
			</h1>
			<div className="px-4 py-5 border-b rounded-t sm:px-6">
				<div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
					<ul className="divide-y divide-gray-200">
						<li>
							<div className="px-4 py-4 sm:px-6">
								<div className="flex items-center justify-start">
									<p className="px-4 text-md text-gray-700 dark:text-white md:truncate">
										{weather}
									</p>
									{weather === "Thunderstorm" && (
										<WeatherIcon
											name="owm"
											iconId="520"
											flip="horizontal"
											rotate="90"
										/>
									)}
									{weather.includes("Showers") && (
										<WeatherIcon
											name="owm"
											iconId="520"
											flip="horizontal"
											rotate="90"
										/>
									)}
									{(weather === "Cloudy" || weather === "Windy") && (
										<WeatherIcon
											name="owm"
											iconId="801"
											flip="horizontal"
											rotate="90"
										/>
									)}
									{(weather === "Clear" || weather === "Sunny") && (
										<WeatherIcon
											name="owm"
											iconId="800"
											flip="horizontal"
											rotate="90"
										/>
									)}
								</div>
							</div>
						</li>
						<li>
							<div className="px-4 py-4 sm:px-6">
								<div className="flex items-center justify-between">
									<p className="px-4 text-md text-gray-700 dark:text-white md:truncate">
										Lowest: {temp.low}ºC
									</p>
								</div>
							</div>
						</li>
						<li>
							<div className="px-4 py-4 sm:px-6">
								<div className="flex items-center justify-between">
									<p className="px-4 text-md text-gray-700 dark:text-white md:truncate">
										Highest: {temp.high}ºC
									</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Weather;
