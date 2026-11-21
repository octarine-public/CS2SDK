// AUTO-GENERATED - do not edit.
/**
 * The game's camera, asked of the engine anew on every read of a property. Use the game's
 * `CameraSDK` instance.
 */
declare class CCameraManager {
	/**
	 * The manager the SDK's own projection reads the camera through. A game may put its own
	 * manager here in place of the base one.
	 */
	public static Current: CCameraManager
	/** The camera's field of view in degrees, as the game reports it. */
	public get FoV(): number
	/**
	 * The camera distance the game reports. What it measures is the game's own; the SDK only
	 * hands it to the engine's projection along with the position and the angles.
	 */
	public get Distance(): number
	/**
	 * The camera's view angles in degrees: pitch in `x`, yaw in `y`, roll in `z`. A new object on
	 * every read.
	 */
	public get Angles(): QAngle
	/** Where the camera is in the world. A new vector on every read. */
	public get Position(): Vector3
}

/**
 * The CS2 camera: the shared manager plus the clamping this game's view needs before an angle
 * is written back to it.
 */
interface CCS2CameraManager extends CCameraManager {
	/**
	 * Points the camera at `angles`, clamped to a pitch the game accepts and a yaw inside one
	 * turn. The angle is modified in place.
	 */
	SetAngles(angles: QAngle): void
}
/** The game's camera: the one {@link CCS2CameraManager}. */
declare const CameraSDK: CCS2CameraManager
