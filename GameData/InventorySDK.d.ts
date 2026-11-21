// AUTO-GENERATED - do not edit.
/** An item the changer put into the inventory, as {@link CInventory.AddedItems} lists it. */
interface IAddedItem {
	/** Its id, the one {@link CInventory.CreateItem} answered. */
	readonly id: number
	/** Its item definition index. */
	readonly defIndex: number
	/** Its paint kit. */
	readonly kitId: number
	/** Its pattern seed. */
	readonly seed: number
	/** Its wear, from 0 to 1. */
	readonly wear: number
	/** Its StatTrak count; -1 without StatTrak. */
	readonly statTrak: number
	/** The sticker kit of a loose sticker; -1 on any other item. */
	readonly stickerKit: number
	/** The charm kit of a loose keychain; -1 on any other item. */
	readonly keychainKit: number
	/** Which kit a music kit item plays, by its `music_definitions` key; -1 on any other item. */
	readonly musicKit: number
	/** Whether it is equipped for the terrorists. */
	readonly equippedT: boolean
	/** Whether it is equipped for the counter-terrorists. */
	readonly equippedCt: boolean
	/** Its style, the material group it renders with; 0 for the definition's own. */
	readonly style: number
	/** Its quality (`EItemQuality`). */
	readonly quality: number
	/** Its integer attributes, raw uint32 values by items_game attribute index. */
	readonly attributes: Readonly<Record<string, number>>
	/** Its name tag; empty without one. */
	readonly customName: string
}
/** One team's loadout slot, as {@link CInventory.Loadout} lists it. */
interface ILoadoutEntry {
	/** The team: 0 for the terrorists, 1 for the counter-terrorists. */
	readonly team: number
	/** The loadout slot (`ELoadOutSlot`). */
	readonly slot: number
	/**
	 * The item's id; 0 for an empty slot. A stock item's id is past what a number holds exactly,
	 * so every stock item reads the same one.
	 */
	readonly id: number
	/** The item's definition index; 0 for an empty slot. */
	readonly defIndex: number
	/** Its paint kit; -1 for a stock item. */
	readonly kitId: number
	/** Its pattern seed. */
	readonly seed: number
	/** Its wear, from 0 to 1. */
	readonly wear: number
	/** Its StatTrak count; -1 without StatTrak. */
	readonly statTrak: number
}
/** A replace-mode skin override, as {@link CInventory.SkinOverrides} lists it. */
interface ISkinOverride {
	/** The item definition index it replaces the finish of. */
	readonly index: number
	/** The team: 0 for the terrorists, 1 for the counter-terrorists. */
	readonly team: number
	/** The paint kit it puts on. */
	readonly kitId: number
	/** Its pattern seed. */
	readonly seed: number
	/** Its wear, from 0 to 1. */
	readonly wear: number
	/** The knife or glove definition it puts in the item's place; -1 for none. */
	readonly itemDef: number
}
/**
 * The inventory changer of the core: items made on the client, put into the local inventory,
 * equipped, and the skin overrides and hidden owned items beside them. An item is made with
 * {@link CreateItem}, dressed by the setters and committed with {@link AddItem}. Everything that
 * writes runs on the game's main thread and throws outside it: call it inside `MainThread.Queue`.
 * The rest can be called anywhere. Use the `InventorySDK` instance.
 * @example
 * await MainThread.Queue(() => {
 * 	const id = InventorySDK.CreateItem(7, 6)
 * 	InventorySDK.SetItemPaintKit(id, 44, 0, 0.01)
 * 	InventorySDK.AddItem(id)
 * })
 */
interface CInventory {
	/** Whether the core can switch the changer off and on; one built before it cannot. */
	get HasChangerSwitch(): boolean
	/**
	 * Makes an item of the definition `definition` at rarity `rarity` (0-15) and answers its id; 0
	 * outside a match. It is not in the inventory until {@link AddItem}.
	 */
	CreateItem(definition: number, rarity: number): number
	/** Sets the item's paint kit, pattern seed and wear. */
	SetItemPaintKit(id: number, paintKit: number, seed: number, wear: number): void
	/** Sets the item's rarity, 0-15. */
	SetItemRarity(id: number, rarity: number): void
	/**
	 * Marks the item new, the way the GC hands one over, before {@link AddItem}: the game lists it
	 * for acknowledgement and reads `reason` as how it was picked up, 5 being found in a crate.
	 */
	SetItemUnacknowledged(id: number, reason: number): void
	/** Sets the item's quality (`EItemQuality`, 1-15) over the one it was made with. */
	SetItemQuality(id: number, quality: number): void
	/** Sets the item's StatTrak count. */
	SetItemStatTrak(id: number, count: number): void
	/** Sets the item's name tag. */
	SetItemName(id: number, name: string): void
	/** Sets the sticker kit of a loose sticker item (definition 1209). */
	SetItemStickerKit(id: number, kit: number): void
	/** Sets the charm kit of a loose keychain item (definition 1355). */
	SetItemKeychainKit(id: number, kit: number): void
	/** Sets the music kit of a music kit item (definition 1314) by its `music_definitions` key. */
	SetItemMusicKit(id: number, music: number): void
	/**
	 * Sets an integer attribute of the item by its items_game attribute index; a negative value is
	 * stored as its uint32.
	 */
	SetItemAttribute(id: number, attribute: number, value: number): void
	/** Sets the item's style (0-255), the material group it renders with; 0 for the definition's own. */
	SetItemStyle(id: number, style: number): void
	/** Marks the item for its weapon's legacy model. */
	SetItemLegacyModel(id: number, legacy: boolean): void
	/** Sets the world model the item is drawn with, mostly a knife's; an empty string clears it. */
	SetItemModel(id: number, model: string): void
	/** Puts the made item into the local inventory; false for an unknown id. */
	AddItem(id: number): boolean
	/** Tells the game an item already added has changed, so the change shows; false for an unknown id. */
	UpdateItem(id: number): boolean
	/** Takes the item out of the inventory and destroys it; false for an unknown id or a failed removal. */
	RemoveItem(id: number): boolean
	/**
	 * Equips the item into loadout slot `slot` for team `team`: 0 the terrorists, 1 the
	 * counter-terrorists, 2 both. False for an unknown id or a slot it cannot go into.
	 */
	EquipItem(id: number, team: number, slot: number): boolean
	/**
	 * How many items of the definition `definition` the account really owns, hidden ones counted
	 * and the changer's left out; 0 before the inventory loads.
	 */
	CountOwnedItems(definition: number): number
	/**
	 * Keeps the account's own items of the definition `definition` out of the local inventory, so
	 * one the changer adds is the only one the game sees, or gives them back. Kept with the config.
	 */
	SetOwnedItemsHidden(definition: number, hidden: boolean): void
	/** The definitions whose owned items are hidden. */
	HiddenOwnedItems(): number[]
	/** A counter that changes whenever the changer's items change: read {@link AddedItems} again then. */
	AddedItemsVersion(): number
	/** The items the changer has put into the inventory, restored from the config and added since. */
	AddedItems(): readonly IAddedItem[]
	/**
	 * Reads the equipped loadout again and answers a counter that changes whenever it did, the
	 * game's own equips included: {@link Loadout} answers from this reading.
	 */
	LoadoutVersion(): number
	/**
	 * Every loadout slot of both teams, empty ones included, as {@link LoadoutVersion} last read
	 * them; owned items and the changer's alike.
	 */
	Loadout(): readonly ILoadoutEntry[]
	/** A counter that changes whenever the skin overrides are restored from the config. */
	SkinOverridesVersion(): number
	/** The replace-mode skin overrides in effect. */
	SkinOverrides(): readonly ISkinOverride[]
	/** Lifts every replace-mode skin override. */
	ClearSkinOverrides(): void
	/**
	 * Switches the changer off or on: off takes its items out of the inventory and lifts its
	 * overrides and hidden owned items, which its config keeps for on to bring back. Kept with the
	 * config; only on a core that {@link HasChangerSwitch}.
	 */
	SetChangerEnabled(enabled: boolean): void
}
/** The core's inventory changer: the one {@link CInventory}. */
declare const InventorySDK: CInventory
