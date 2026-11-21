// AUTO-GENERATED - do not edit.
/**
 * A grenade in a player's hands: decoy, flashbang, HE, incendiary, molotov or smoke. It carries
 * the pin pull and the throw; the projectile it becomes is a different entity. The server sends
 * these fields for every player, not for the holder alone.
 */
declare class GrenadeWeapon extends WeaponBase {
	/** True from the pin coming out until the throw is let go of. */
	public readonly IsPinPulled: boolean
	/** True while the throwing animation runs, which outlasts the grenade leaving the hand. */
	public readonly IsThrowAnimating: boolean
	/** Absolute game time the grenade leaves the hand at, and 0 while no throw is under way. */
	public readonly ThrowTime: number
	/** Absolute game time the pin was last pulled at. */
	public readonly PinPullTime: number
	/** How far the throw is charged, from 0 for a lob at the feet to 1 for a full throw. */
	public readonly ThrowStrength: number
	/**
	 * Seconds until the grenade leaves the hand, and 0 where none is on its way out. The release
	 * is scheduled a moment ahead of the button coming up rather than happening on it, which is
	 * the window this counts down.
	 */
	public get TimeUntilThrown(): number
	/**
	 * True while a throw is under way: the pin is out, or the throw has been let go of and the
	 * grenade has not left the hand yet ({@link TimeUntilThrown} above 0).
	 * @example
	 * const throwing = pawn.ActiveWeapon instanceof GrenadeWeapon && pawn.ActiveWeapon.IsPrimed
	 */
	public get IsPrimed(): boolean
}
