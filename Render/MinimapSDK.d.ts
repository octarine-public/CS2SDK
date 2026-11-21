// AUTO-GENERATED - do not edit.
/** The radar: the part of the world it covers. */
interface CMinimapSDK {
	/**
	 * The world rectangle the radar covers, as `CCSGameRules` reports it, oriented for the side
	 * the local player is on.
	 */
	readonly MinimapBounds: Rectangle
}
/** The radar: the one {@link CMinimapSDK}. */
declare const MinimapSDK: CMinimapSDK
