// AUTO-GENERATED - do not edit.
/** One entry of {@link WeaponInfos}: an item's name and icon, and a knife's or gloves' model. */
interface WeaponInfo {
	/** Name to show for the item, in English: `"Desert Eagle"`, `"M4A1-S"`. */
	displayName: string
	/** Name of its icon for {@link equipmentIcon}, e.g. `"ak47"`. Gloves have none. */
	iconName?: string
	/**
	 * Model path to force when overriding this item: m_szWorldModel (weapons.vdata_c) for knives,
	 * model_player (items_game) for gloves.
	 */
	worldModel?: string
	/** Hidden from user-facing lists (e.g. the skin changer dropdown). */
	hidden?: boolean
	/** Item category; absent => a regular weapon. */
	category?: "knife" | "glove"
}
/**
 * The game's weapon data, `scripts/weapons.vdata_c`, parsed when the SDK loads. Use the
 * {@link WeaponManager} instance.
 */
interface CWeaponManager {
	/** The whole file as parsed: a weapon's entry sits under its class name, e.g. "weapon_ak47". */
	readonly WeaponsVData: RecursiveMap
	/**
	 * The weapons.vdata_c entry of a weapon, or of a class name (e.g. "weapon_ak47"). `null` for
	 * no weapon, and for one the file has no entry for.
	 */
	GetWeaponVData(weapon: WeaponBase | string | null): Map<string, any> | null
}
/** The game's weapon data: the one {@link CWeaponManager}. */
declare const WeaponManager: CWeaponManager
