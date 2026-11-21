// AUTO-GENERATED - do not edit.
/** A first-person model of the local player: its custom id and the item it shows. */
interface ViewModelPart {
	/** The model's custom entity id, what `ChamsSDK.SetEntityStyle` takes. */
	readonly entity: number
	/** The item definition index it shows, after the skin changer's override. */
	readonly itemDefinition: number
}
/**
 * The local player's first-person models: the weapon in hand, the gloves and the arms they are
 * bone merged onto. They are client-side entities the HUD draws, absent from the entity list. Use
 * the `ViewModelSDK` instance.
 */
interface CViewModel {
	/** The active weapon's first-person model; undefined while there is none. */
	get Weapon(): Nullable<ViewModelPart>
	/** The gloves' first-person model; undefined with no glove item on, or on a host built before it. */
	get Gloves(): Nullable<ViewModelPart>
	/**
	 * The custom entity id of the first-person arms; undefined while there are none, or on a host
	 * built before it.
	 */
	get Arms(): Nullable<number>
}
/** The local player's first-person models: the one {@link CViewModel}. */
declare const ViewModelSDK: CViewModel
