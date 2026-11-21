// AUTO-GENERATED - do not edit.
/**
 * A thrown smoke grenade (`CSmokeGrenadeProjectile`): the projectile and, once it pops, its
 * cloud. The grenade in a hand is a `GrenadeWeapon`.
 */
declare class SmokeGrenade extends Entity {
	/** True once the smoke cloud has popped (the effect is live). */
	public readonly DidSmokeEffect: boolean
	/** Server tick at which the smoke effect started. */
	public readonly SmokeEffectTickBegin: number
	/** True while the smoke cloud is on the ground and still blocking vision. */
	public get IsActive(): boolean
	/** Seconds left until the smoke cloud fully dissipates (0 once gone). */
	public get RemainingTime(): number
}
