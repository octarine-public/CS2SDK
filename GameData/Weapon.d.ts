// AUTO-GENERATED - do not edit.
/**
 * A weapon entity: `CCSWeaponBase` and every class under it that has no wrapper of its own.
 * `C4`, `GrenadeWeapon` and `Knife` extend it.
 */
declare class WeaponBase extends Entity {
	/**
	 * The weapon's item definition index: the number `EWeaponIndex` names, and the key of
	 * `WeaponInfos` and of `PaintKitManager`'s items.
	 */
	public readonly ItemDefinitionIndex: number
	/** Whether the weapon is being reloaded. */
	public readonly IsInReload: boolean
	/** The weapon's zoom step: 0 when not zoomed, 1 and 2 for the first and second zoom. */
	public readonly ZoomLevel: number
	/** Rounds in reserve for the weapon; 0 while the server has sent no count. */
	public get ReserveAmmo(): number
	/** Rounds left in the weapon's clip. */
	public get ClipAmmo(): number
}
