// AUTO-GENERATED - do not edit.
/**
 * The bomb once it is planted (`CPlantedC4`): its timer, its site and the defuse under way. The
 * bomb as a carried weapon is `C4`.
 */
declare class PlantedC4 extends Entity {
	/** Whether the server reports the bomb as ticking. */
	public readonly IsTicking: boolean
	/** Game time in seconds (`GameState.RawGameTime`) the bomb explodes at. */
	public readonly C4Blow: number
	/** The length of the bomb's timer, as the server sends it. */
	public readonly TimerLength: number
	/** The site the bomb is planted on: 0 for A, 1 for B. */
	public readonly BombSite: number
	/** True once the bomb has gone off. */
	public readonly HasExploded: boolean
	/** True once the bomb is defused. */
	public readonly IsDefused: boolean
	/** True while someone is defusing the bomb; {@link Defuser} is who. */
	public readonly BeingDefused: boolean
	/** Game time in seconds (`GameState.RawGameTime`) the defuse under way completes at. */
	public readonly DefuseCountDown: number
	/** The length of the defuse under way, as the server sends it. */
	public readonly DefuseLength: number
	/**
	 * Whether the server marks the bomb as impossible to defuse. {@link WillDefuseInTime} is
	 * false while it is set.
	 */
	public readonly CannotBeDefused: boolean
	/** Player pawn currently defusing this bomb, if any (only while {@link BeingDefused}). */
	public get Defuser(): Nullable<PlayerPawn>
	/** Seconds left until the bomb explodes (0 once it blows). */
	public get TimeUntilBlow(): number
	/** Seconds left until an in-progress defuse completes. */
	public get TimeUntilDefused(): number
	/** Whether an in-progress defuse will finish before the bomb blows. */
	public get WillDefuseInTime(): boolean
	/** Bomb site as a letter ("A" / "B"). */
	public get BombSiteLetter(): string
	/**
	 * Baked HUD damage estimate (0-255), or undefined for invalid entities or unavailable data.
	 * Includes the engine's player adjustments; this is not guaranteed server damage.
	 * @example const damage = bomb.GetBakedDamage(playerPawn)
	 */
	public GetBakedDamage(target: Entity): Nullable<number>
}
