// AUTO-GENERATED - do not edit.
/** Live predicted cooldowns, expressed in seconds on the local tick-base clock. */
interface KnifeAttackState {
	/**
	 * The local player's clock now, in seconds: its tick base times the tick interval. The other
	 * times are on the same clock.
	 */
	time: number
	/** The time a slash, the primary attack, is next allowed. */
	primaryReady: number
	/** The time a stab, the secondary attack, is next allowed. */
	secondaryReady: number
	/**
	 * Whether a slash made now is a first swing, which hits harder: the game flags it, or the
	 * slash came off cooldown over 0.4 seconds ago.
	 */
	firstSwing: boolean
	/**
	 * The time a slash next counts as a first swing: 0.4 seconds and one tick after its
	 * cooldown ends.
	 */
	firstSwingReady: number
}
/** The player reached by a knife's melee collision test. */
interface KnifeTrace {
	/** The `CustomNativeID` of the player pawn the attack reaches. */
	targetId: number
	/** The hitgroup the attack lands in, a value of `EHitGroup`. */
	hitgroup: number
}
/**
 * A knife (`CKnife`): the cooldowns of its slash and stab, and which player an attack would
 * reach.
 */
declare class Knife extends WeaponBase {
	/** Reads the equipped knife's predicted state directly from the engine. */
	public GetAttackState(): KnifeAttackState | undefined
	/** Traces a slash or stab from a command position, including the melee sphere fallback. */
	public TraceAttack(start: Vector3, angles: QAngle, ownerId: number, secondary: boolean): KnifeTrace | undefined
}
