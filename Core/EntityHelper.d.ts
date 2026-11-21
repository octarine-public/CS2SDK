// AUTO-GENERATED - do not edit.
/** Entity checks the SDK's features pick their targets by. */
declare class EntityHelper {
	/**
	 * Whether a feature may act on `entity`: it still exists, is neither the local player nor
	 * their pawn, and is an enemy ({@link Entity.IsEnemy}) unless `teammates` is true. Whether it
	 * is alive is not checked.
	 */
	public static IsAllowedPlayerPawn(entity: Entity, teammates: boolean): boolean
	/**
	 * Whether a feature may act on `pawn`: it still exists, is not the local player's pawn, and
	 * is an enemy ({@link Entity.IsEnemy}) unless `teammates` is true. Whether it is alive is not
	 * checked.
	 */
	public static IsAllowedPlayerPawn(pawn: PlayerPawn, teammates: boolean): boolean
}
