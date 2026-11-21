// AUTO-GENERATED - do not edit.
/** A detached vector from native predicted state. */
interface PredictionVector {
	/** The x component. */
	readonly x: number
	/** The y component. */
	readonly y: number
	/** The z component. */
	readonly z: number
}
/** Native local movement values, independent of the SDK's networked entity cache. */
interface PredictedLocalPlayerState {
	/** The player's tick base at this simulation step. */
	readonly TickBase: number
	/** Complete native m_fFlags bitmask, including bits without convenience getters. */
	readonly Flags: number
	/** Whether the player is standing on the ground. */
	readonly IsOnGround: boolean
	/** The player's health. */
	readonly Health: number
	/** CheckFalling contacts during the most recent simulated command. */
	readonly LandingImpacts: number
	/** Downward fall speed, in world units per second. */
	readonly FallVelocity: number
	/** How far the player is ducked, 0 when standing to 1 when fully ducked. */
	readonly DuckAmount: number
	/** The pawn's actual move type, an `EMoveType` value. */
	readonly MoveType: number
	/** Whether the movement wants the player ducked this step. */
	readonly DesiresDuck: boolean
	/** Whether the player is ducking; being fully ducked is another flag, not carried here. */
	readonly Ducking: boolean
	/** Absolute world position at the current simulation step. */
	readonly Origin: PredictionVector
	/** Absolute velocity in world units per second, including the vertical component. */
	readonly Velocity: PredictionVector
	/** How many commands {@link CPrediction.RunCommand} has simulated in this transaction. */
	readonly Steps: number
	/**
	 * Always `"partial-spatial"`: the snapshot carries the supported spatial fields, not every
	 * engine cache.
	 */
	readonly Coverage: "partial-spatial"
}
/** Successful restoration of the supported checkpoint fields, not all engine caches. */
interface PredictionRestoreReport {
	/** Always true; a failed restore throws instead. */
	readonly Restored: true
	/** How many commands the transaction simulated before it was restored. */
	readonly Steps: number
	/**
	 * Always `"partial-spatial"`: the restore covers the supported spatial fields, not every
	 * engine cache.
	 */
	readonly Coverage: "partial-spatial"
}
/** A prediction operation failed; Status is suitable for diagnostics. */
declare class PredictionError extends Error {
	/** What failed, as a name such as `"busy"` or `"stale-command"`. */
	public readonly Status: string
	/** Builds the error, setting {@link Status} and a matching message. */
	constructor(
	/** What failed, as a name such as `"busy"` or `"stale-command"`. */
	Status: string)
}
/**
 * Request-scoped movement simulation on the game thread. Available only inside a
 * UserCmd handler. Runs are sequential; EndTransaction restores the saved baseline.
 */
declare class CPrediction {
	/** Requests pre-command capture and reports availability for this command. Call before starting a transaction.
	 * The first request can return false until the next real engine movement pass.
	 */
	public HasCommandBaseline(): boolean
	/** Saves live state for rollback. "command" simulates from the matching pre-command checkpoint.
	 * Check HasCommandBaseline first when choosing "command". Default "current" retains current-state simulation.
	 */
	public StartTransaction(baseline?: "current" | "command"): void
	/**
	 * Simulates one movement command without submitting it or changing the builder.
	 * Later calls advance private command identity from the same request baseline.
	 * Every call executes its supplied subtick events; no events are implicitly consumed.
	 */
	public RunCommand(command: CommandBuilder): void
	/** Returns an owned snapshot that remains valid after subsequent runs and restoration. */
	public GetLocalPlayerState(): PredictedLocalPlayerState
	/** Traces this transaction's current player hull over one tick with half gravity and a two-unit ground probe. */
	public GetLandingFraction(): number | undefined
	/** Restores native state. Call in finally; failed restoration throws and prevents submission. */
	public EndTransaction(): PredictionRestoreReport
}
