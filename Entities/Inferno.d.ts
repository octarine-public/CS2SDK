// AUTO-GENERATED - do not edit.
/** The fire a molotov or an incendiary grenade leaves burning (`CInferno`). */
declare class Inferno extends Entity {
	/** Server tick at which the fire effect started. */
	public readonly FireEffectTickBegin: number
	/** Total burn duration in seconds (networked, ~7s for molotov/incendiary). */
	public readonly FireLifetime: number
	/** True while the fire is dying out and no longer spreading. */
	public readonly InPostEffectTime: boolean
	/** True while the fire is still burning. */
	public get IsActive(): boolean
	/** Seconds left until the fire burns out (0 once gone). */
	public get RemainingTime(): number
}
