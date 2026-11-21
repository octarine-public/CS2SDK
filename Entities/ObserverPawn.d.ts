// AUTO-GENERATED - do not edit.
/**
 * The pawn a player has while spectating (`CCSObserverPawn`): `Player.Pawn` is one then, and
 * {@link Target} is who it watches.
 */
declare class ObserverPawn extends Entity {
	/** The observer mode, as the number the server sends. */
	public readonly ObserverMode: number
	/**
	 * Handle of the entity the observer watches; `EntityManager.INVALID_HANDLE` until the server
	 * names one.
	 */
	public readonly ObserverTarget: number
	/** The observer pawn's player state; `STATE_ACTIVE` until the server sends another. */
	public readonly PlayerState: EPlayerState
	/**
	 * The entity {@link ObserverTarget} names, typed as a player pawn without a check that it is
	 * one; `undefined` when it names none or that entity is not on this client.
	 */
	public get Target(): Nullable<PlayerPawn>
}
