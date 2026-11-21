// AUTO-GENERATED - do not edit.
/** Team selector for OverrideWeaponPaintKit: "t", "ct" or "all". */
type PaintKitOverrideTeam = "t" | "ct" | "all"
/**
 * A finish from items_game paint_kits: what a weapon, a knife or a pair of gloves is painted
 * with. An optional field is absent on a kit whose entry gives no such value.
 */
interface PaintKit {
	/** Its key in paint_kits: the id {@link CPaintKitManager.OverrideWeaponPaintKit} takes. */
	id: number
	/** Internal name, e.g. "am_doppler_phase1": the `kit` of a loot list entry `[kit]item`. */
	name: string
	/** Localization token of the finish's description text. */
	descriptionString?: string
	/** Localization token of the finish's name, to resolve with `GameLocalization.Localize`. */
	descriptionTag?: string
	/** The kit's `wear_gradient`, as items_game writes it. */
	wearGradient?: string
	/** The kit's `vmt_path`, as items_game writes it. */
	vmtPath?: string
	/** The kit's `same_name_family_aggregate`, as items_game writes it. */
	sameNameFamilyAggregate?: string
	/** Path of the kit's composite material, from `composite_material_path`. */
	compositeMaterialPath?: string
	/** The wear the kit names as its default (`wear_default`); 0 when it names none. */
	wearDefault: number
	/** The kit's `seed` in items_game; 0 when it names none. */
	seed: number
	/** The kit's `style` in items_game; 0 when it names none. */
	style: number
	/** Whether the kit asks for the weapon's legacy model (`use_legacy_model`). */
	useLegacyModel: boolean
	/** The kit's `view_model_exponent_override_size` in items_game. */
	viewModelExponentOverrideSize?: number
	/** The text entries of the kit's `vmt_overrides` block by key; absent when it has none. */
	vmtOverrides?: Map<string, string>
	/** rarity tier from paint_kits_rarity: common|uncommon|rare|mythical|legendary|ancient|immortal */
	rarity?: string
}
/** A generic econ item from items_game (agents, music kits, pins, ...) for the Misc catalog. */
interface MiscItem {
	/** The item's ItemDefinitionIndex: its key in items_game `items`. */
	defIndex: number
	/** internal name, e.g. "customplayer_ctm_sas" */
	name: string
	/** localization token, e.g. "#CSGO_customplayer_ctm_sas" */
	itemName: string
	/** rarity tier name (keys the same palette as paint kits); "default" if unknown */
	rarity: string
	/** image_inventory path, e.g. "econ/characters/customplayer_ctm_sas" */
	image: string
	/** model_player path for items whose model must be forced (agents), e.g.
	 * "agents/models/tm_leet/tm_leet_variantj.vmdl"; undefined for items with no model override */
	model?: string
	/**
	 * The model the inventory's pedestal shows a collectible on (a coin's, a pin's, a trophy's),
	 * from its "pedestal display model" attribute. Only for display: nothing forces it on the item.
	 */
	displayModel?: string
	/**
	 * Every prefab the item inherits from, nearest first, e.g. ["premier_season_coin", ...]: what
	 * kind of item it is, for sorting a catalog
	 */
	prefabs: string[]
}
/**
 * A sticker kit from items_game sticker_kits, for the sticker catalog. A loose sticker in the
 * inventory is the base "sticker" item (def 1209) carrying this kit id in its "sticker slot 0 id".
 */
interface StickerKit {
	/** sticker kit id (goes into the "sticker slot 0 id" attribute) */
	id: number
	/** internal name, e.g. "std_thirteen" */
	name: string
	/** localization token, e.g. "#StickerKit_std_thirteen" */
	itemName: string
	/** rarity tier name (keys the same palette as paint kits); "default" if unknown */
	rarity: string
	/** image_inventory path derived from sticker_material, e.g. "econ/stickers/standard/thirteen" */
	image: string
	/**
	 * A graffiti rather than a sticker ("spray_" kits): it goes on a spray paint item (def 1349),
	 * which the game sprays as a decal
	 */
	graffiti: boolean
	/**
	 * A graffiti any {@link GraffitiTint} can recolour: one of the standard sets, whose
	 * `sticker_material` starts with "default".
	 */
	tintable: boolean
}
/** A colour a tintable graffiti can be sprayed in, from items_game graffiti_tints. */
interface GraffitiTint {
	/** tint id (goes into the "spray tint id" attribute) */
	id: number
	/** internal name, e.g. "brick_red" */
	name: string
	/** the colour, e.g. "#874444" */
	hex: string
}
/**
 * A charm kit from items_game keychain_definitions, for the keychain catalog. A loose keychain in the
 * inventory is the base "keychain" item (def 1355) carrying this kit id in its "keychain slot 0 id".
 */
interface KeychainKit {
	/** charm kit id (goes into the "keychain slot 0 id" attribute) */
	id: number
	/** internal name, e.g. "kc_missinglink_ava" */
	name: string
	/** localization token, e.g. "#keychain_kc_missinglink_ava" */
	itemName: string
	/** rarity tier name (keys the same palette as paint kits); "default" if unknown */
	rarity: string
	/** image_inventory path, e.g. "econ/keychains/missinglink/kc_missinglink_ava" */
	image: string
	/**
	 * The charm's own model, as the inventory's pedestal shows it, e.g.
	 * "weapons/keychains/missinglink/vmdl/kc_missinglink_ava.vmdl"; a highlight takes its base's
	 */
	model?: string
	/**
	 * The pattern the game previews the charm with when the item carries none (display_seed); 0 for
	 * a charm that names none, which the game then previews as the middle pattern
	 */
	displaySeed: number
	/**
	 * The material the charm draws with over its model's own (keychain_material): a community charm
	 * shares a blank model, e.g. "weapons/keychains/workshop_blanks/kc_missinglink_default.vmdl",
	 * and is told apart only by this, e.g.
	 * "weapons/keychains/missinglink_community_01/kc_missinglink_muteghost.vmat"
	 */
	material?: string
}
/**
 * A pet from items_game pet_definitions. A pet in the inventory is the base "pet" item (def 4681)
 * carrying this id in its "pet id" attribute (296); the egg and the chick are definitions too.
 */
interface PetDefinition {
	/** pet id (goes into the "pet id" attribute) */
	id: number
	/** internal name, e.g. "chicken_silkie_01" */
	name: string
	/** localization token, e.g. "#pet_chicken" */
	itemName: string
	/** the model the inventory pedestal shows, e.g. "models/chicken/chicken_silkie.vmdl" */
	model: string
}
/**
 * A music kit from items_game music_definitions. A music kit in the inventory is the base
 * "musickit" item (def 1314) carrying this id in its "music id" attribute (166).
 */
interface MusicKit {
	/** music id (goes into the "music id" attribute) */
	id: number
	/** internal name, e.g. "valve_cs2_01" */
	name: string
	/** localization token, e.g. "#musickit_valve_cs2_01" */
	itemName: string
	/** rarity tier name (keys the same palette as paint kits); music kits are all "rare" */
	rarity: string
	/** image_inventory path, e.g. "econ/music_kits/valve_cs2_01" */
	image: string
}
/** What a container opens into, from the inv_container_and_tools of its prefab chain. */
type ContainerKind = "weapon_case" | "souvenir_case" | "sticker_capsule" | "patch_capsule" | "graffiti_box"
/**
 * A container from items_game: a weapon case, souvenir package or capsule, which is an item of its
 * own definition index that the game unlocks for its loot. `model` is the crate the game stands in
 * its inspect view; a container that ships only its econ image leaves it undefined.
 */
interface ContainerItem extends MiscItem {
	/** What the container opens into. */
	kind: ContainerKind
	/** ItemDefinitionIndex of the key that unlocks it; undefined for one that opens without a key */
	key?: number
	/**
	 * A "volatile container": a terminal, opened once into a dealer that offers its loot one item at
	 * a time for purchase, rather than unboxed
	 */
	volatile: boolean
}
/**
 * One item a container can unbox, out of its client_loot_lists entry `[kit]item`. The knives and
 * gloves a case may give are not shipped to the client, so its special item is never among them.
 */
interface ContainerLoot {
	/** the item's definition name, e.g. "weapon_ak47" or "sticker" */
	item: string
	/** the name in the entry's brackets: a paint kit's, a sticker kit's, a patch's, ... */
	kitName: string
	/** the grade of the list it was found under, as paint kit rarities name it: common..ancient */
	grade: string
	/** ItemDefinitionIndex of `item`, or -1 when no item has that name */
	defIndex: number
	/** the paint kit id for a weapon, the sticker kit id for a sticker; -1 for anything else */
	kit: number
}
/**
 * One light out of an item's inventory_image_data: the rig the game lights its own render with.
 * A spot is kept as its position and colour - what shapes the render is where it sits and what
 * colour it is, and a cone needs a light type the renderer has no notion of.
 */
interface InventoryLight {
	/** position in the model's own space */
	position: [number, number, number]
	/** hue, scaled so its brightest channel is 1 */
	color: [number, number, number]
	/** brightness the rig was authored at; runs past 1, which is where a rim light lives */
	intensity: number
}
/**
 * The game's item catalogue, read from `scripts/items/items_game.txt` when the SDK loads: paint
 * kits and the weapons they fit, stickers, charms, music kits, pets, and containers with their
 * loot. Every collection stays empty when the file has no `items_game` block. Use the
 * {@link PaintKitManager} instance.
 */
interface CPaintKitManager {
	/** paint kit id -> paint kit */
	readonly PaintKits: Map<number, PaintKit>
	/** The same paint kits as {@link PaintKits}, keyed by {@link PaintKit.name}. */
	readonly PaintKitsByName: Map<string, PaintKit>
	/** weapon ItemDefinitionIndex -> applicable paint kits */
	readonly WeaponPaintKits: Map<number, PaintKit[]>
	/** weapon ItemDefinitionIndex -> entity name (e.g. "weapon_awp") */
	readonly WeaponNames: Map<number, string>
	/** All items from items_game keyed by ItemDefinitionIndex (the Misc catalog). */
	readonly Items: Map<number, MiscItem>
	/** All sticker kits from items_game keyed by sticker kit id (the sticker catalog). */
	readonly Stickers: Map<number, StickerKit>
	/** Every graffiti tint, in the order items_game lists them. */
	readonly GraffitiTints: GraffitiTint[]
	/** All charm kits from items_game keyed by keychain kit id (the keychain catalog). */
	readonly Keychains: Map<number, KeychainKit>
	/** All music kits from items_game keyed by music id (the music catalog). */
	readonly MusicKits: Map<number, MusicKit>
	/** All pets from items_game keyed by pet id (the pet catalog). */
	readonly Pets: Map<number, PetDefinition>
	/** Every case, souvenir package and capsule keyed by ItemDefinitionIndex; each is in Items too. */
	readonly Containers: Map<number, ContainerItem>
	/** weapon/item ItemDefinitionIndex -> loadout slot index (ELoadOutSlot), for equipping. */
	readonly LoadoutSlots: Map<number, number>
	/** item ItemDefinitionIndex -> team bitmask (1 = T, 2 = CT) from used_by_classes. */
	readonly UsableTeams: Map<number, number>
	/**
	 * item ItemDefinitionIndex -> the camera angles (pitch, yaw, roll) the game frames the item's
	 * inventory render with, from inventory_image_data. What makes a rendered weapon sit at the
	 * same angle its econ image does.
	 */
	readonly InventoryCameraAngles: Map<number, [number, number, number]>
	/** item ItemDefinitionIndex -> the lights the game renders it under, from inventory_image_data. */
	readonly InventoryLights: Map<number, InventoryLight[]>
	/** item ItemDefinitionIndex -> the vertical field of view its inventory render is taken with. */
	readonly InventoryCameraFov: Map<number, number>
	/** Every catalogued item (agents, music kits, pins, ...). */
	GetAllItems(): MiscItem[]
	/** Every catalogued sticker kit. */
	GetAllStickers(): StickerKit[]
	/** Every catalogued charm kit. */
	GetAllKeychains(): KeychainKit[]
	/** Every catalogued music kit. */
	GetAllMusicKits(): MusicKit[]
	/** Every catalogued pet, in pet id order. */
	GetAllPets(): PetDefinition[]
	/** Every catalogued case, souvenir package and capsule, in definition order. */
	GetAllContainers(): ContainerItem[]
	/**
	 * What a container can unbox, by grade, resolved through its supply crate series; empty for
	 * one that names no loot list. Built on first use and kept.
	 * @example
	 * const covert = PaintKitManager.GetContainerLoot(4717).filter(loot => loot.grade === "ancient")
	 */
	GetContainerLoot(defIndex: number): ContainerLoot[]
	/** Paint kits that can be applied to the weapon at the given ItemDefinitionIndex. */
	GetWeaponPaintKits(weaponIndex: number): PaintKit[]
	/** Weapon entity name (e.g. "weapon_awp") for an ItemDefinitionIndex. */
	GetWeaponEntityName(weaponIndex: number): Nullable<string>
	/**
	 * Camera angles (pitch, yaw, roll) the game's own inventory render uses for an item, or
	 * undefined when nothing in its prefab chain names any.
	 */
	GetInventoryCameraAngles(defIndex: number): Nullable<[number, number, number]>
	/** Field of view the game's own inventory render uses, or undefined when it names none. */
	GetInventoryCameraFov(defIndex: number): Nullable<number>
	/** The lights the game's own inventory render uses for an item; empty when it names none. */
	GetInventoryLights(defIndex: number): InventoryLight[]
	/** Loadout slot (ELoadOutSlot) for an item, or -1 if it has none (needed to equip it). */
	GetLoadoutSlot(defIndex: number): number
	/**
	 * Which teams can equip an item, from its used_by_classes. Items with no used_by_classes in
	 * their prefab chain (e.g. music kits) are treated as usable by both.
	 */
	GetUsableTeams(defIndex: number): {
		t: boolean
		ct: boolean
	}
	/**
	 * Override the default paint kit of a weapon, per team.
	 * `usesLegacyModel` is resolved from the paint kit automatically.
	 * @param weaponIndex weapon ItemDefinitionIndex
	 * @param team "t", "ct" or "all"
	 * @param override enable/disable the override for the selected team(s)
	 * @param kitId paint kit id to apply
	 * @param seed pattern/float seed
	 * @param wear wear factor (0..1)
	 * @param modelOverride optional model path to force (e.g. a different knife/glove
	 *        model); omit or pass "" to keep the weapon's own model
	 * @param itemDefinitionOverride optional item definition index to force; omit or
	 *        pass -1 to keep the weapon's own item definition
	 */
	OverrideWeaponPaintKit(weaponIndex: number, team: PaintKitOverrideTeam, override: boolean, kitId: number, seed: number, wear: number, modelOverride?: string, itemDefinitionOverride?: number): void
	/** The paint kit with the id `id`, or `undefined` when there is none. */
	GetPaintKit(id: number): Nullable<PaintKit>
	/** The paint kit named `name`, e.g. "am_doppler_phase1", or `undefined` when there is none. */
	GetPaintKitByName(name: string): Nullable<PaintKit>
}
/** The game's item catalogue: the one {@link CPaintKitManager}. */
declare const PaintKitManager: CPaintKitManager
