// AUTO-GENERATED - do not edit.
/** The weather the local player sees. Use the `WeatherSDK` instance. */
interface CWeather {
	/** Whether the host can set rain droplets; {@link SetRainDroplets} changes nothing on one that cannot. */
	get HasRainDroplets(): boolean
	/**
	 * Sets the rain droplets on the first-person arms, gloves and weapon: `wetness` from 0 (dry) to
	 * 1 (soaked), `speed` from 0 (still) up, 1 being the game's pace. `enabled` false hands them back
	 * to the game. False, changing nothing, for a value out of range or on a host built before it.
	 * The setting ends with the script that made it.
	 * @example
	 * WeatherSDK.SetRainDroplets(true, 0.6, 1.5)
	 */
	SetRainDroplets(enabled: boolean, wetness: number, speed: number): boolean
}
/** The weather the local player sees: the one {@link CWeather}. */
declare const WeatherSDK: CWeather
