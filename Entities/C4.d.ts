// AUTO-GENERATED - do not edit.
/**
 * The bomb as a weapon a player carries (`CC4`): whether it is being planted, when the plant
 * completes and on which site. The planted bomb is `PlantedC4`.
 */
declare class C4 extends WeaponBase {
	/** True while the carrier is arming (planting) this bomb. */
	public readonly StartedArming: boolean
	/** Absolute game time at which an in-progress plant (arming) completes. */
	public readonly ArmedTime: number
	/** Seconds left until an in-progress plant (arming) completes (0 once armed). */
	public get TimeUntilArmed(): number
	/**
	 * Bomb site this bomb is being armed on, as a letter ("A" / "B"), read off the zone its
	 * carrier stands in — the site the planted device the arming lights will carry.
	 * Undefined while nobody is arming it, and where the carrier stands in no site at all:
	 * a plant made outside one belongs to no letter.
	 */
	public get BombSiteLetter(): Nullable<string>
}
