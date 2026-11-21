// AUTO-GENERATED - do not edit.
/**
 * Every entity that exists now, by its {@link Entity.Index}. The map is the SDK's own and changes
 * as entities come and go: read it, do not modify it.
 */
declare const AllEntitiesAsMap: Map<number, Entity>
/** The chams styles and the materials they are built from; see {@link CChamsCatalog}. */
declare const ChamsCatalog: CChamsCatalog
/**
 * The game's entities: every one that exists now, those of one class, and the one a handle
 * names.
 */
declare const EntityManager: ICS2EntityManager
/** The game's own localization: the one {@link CGameLocalization}. */
declare const GameLocalization: CGameLocalization
/** The ItemDefinitionIndex of every grenade: decoy, flashbang, HE, incendiary, molotov, smoke. */
declare const GrenadeIndices: Set<EWeaponIndex>
/** The HE grenade forecast: the one {@link CGrenadeTolls}. */
declare const GrenadeTolls: CGrenadeTolls
/** The ItemDefinitionIndex of every shotgun and machine gun. */
declare const HeavyIndices: Set<EWeaponIndex>
/**
 * Keyboard and mouse state. The shared package's own instance, published here because deciding
 * what a script sees under this name is the game SDK's call.
 */
declare const InputManager: CInputManager
/**
 * Whether the ray from `start` to `end` gets through at least 97% of its length or stops on
 * `toEntityID`. With {@link ETraceMask.CheckSmoke} in the mask a line covered by smoke counts as
 * blocked.
 *
 * False unless `fromEntityID` names a player pawn and both ids name networked entities, not
 * client-side ones; true when the two ids are the same.
 *
 * @param fromEntityID custom id of the player pawn the ray passes through
 * @param toEntityID custom id of the entity the ray is aimed at
 * @example
 * if (IsVisibleByRay(camera, box.Start, local.CustomNativeID, pawn.CustomNativeID)) {
 * 	// nothing and no smoke stands between the camera and that hitbox
 * }
 */
declare function IsVisibleByRay(start: Vector3, end: Vector3, fromEntityID: number, toEntityID: number, mask?: number): boolean
/**
 * Traces a bullet of `weapon` from `start` to `end` through what stands between, against `target`
 * in the pose the server's lag compensation gives it for the shot of the command being built. Only
 * while a user command is built with a shot to read (`ReadShotContext`); `shooter` is the
 * local pawn's custom id. A bullet arriving with less than `minDamage` counts as not reached.
 * @example
 * const hit = PenetrateHistorical(eye, point, pawn.CustomNativeID, target.CustomNativeID, weapon, stats, 1)
 */
declare function PenetrateHistorical(start: Vector3, end: Vector3, shooter: number, target: number, weapon: BulletWeapon, stats: BulletDamageStats, minDamage: number): Penetration
/** The ItemDefinitionIndex of every pistol. The Zeus is not among them. */
declare const PistolIndices: Set<EWeaponIndex>
/** Per-match language history learned from incoming ChatMessage events. Symbols leave history unchanged. */
declare const PlayerLanguages: CPlayerLanguages
/**
 * Every player pawn that exists now, visible or not. The array is the entity manager's own and
 * changes as pawns come and go: read it, do not modify it.
 */
declare const PlayerPawns: PlayerPawn[]
/** The active UserCmd handler's movement prediction facade. */
declare const Prediction: CPrediction
/** Prints a local chat message with the colored Octarine prefix.
 * @example PrintChat("Edge bug completed.")
 */
declare function PrintChat(message: string): boolean
/**
 * Reads the shot of the command being built: where it starts, where it points and the spread it
 * is seeded with. Undefined when the weapon cannot fire it or the game answered garbage. Only while
 * a user command is being built.
 */
declare function ReadShotContext(): Nullable<ShotContext>
/** The ItemDefinitionIndex of every rifle except the sniper rifles of `SniperIndices`. */
declare const RifleIndices: Set<EWeaponIndex>
/** The ItemDefinitionIndex of every submachine gun. */
declare const SMGIndices: Set<EWeaponIndex>
/** The ItemDefinitionIndex of every sniper rifle: AWP, SSG 08, G3SG1 and SCAR-20. */
declare const SniperIndices: Set<EWeaponIndex>
/**
 * What a ray from `start` to `end` hits first, traced by the game's own tracer. Trace from a
 * `UserCmdManager` handler where the answer allows it: the game waits for that one. A listener
 * that runs alongside the game thread, `Draw` among them, traces entities that thread may be
 * creating or destroying.
 *
 * @param skipEntityID custom id to trace through, 0 to trace against everything
 * @param mask contents to trace against
 * @returns the one {@link TraceResult} every call writes into, its `Fraction` 1 when nothing was
 * hit; `undefined` when no tracer is available or the game refused to trace
 * @example
 * const hit = Trace(CameraSDK.Position, point, local.CustomNativeID)
 * if (hit !== undefined && hit.EntityID === pawn.CustomNativeID) {
 * 	// pawn is the first thing on the ray, hit in hit.HitGroup
 * }
 */
declare function Trace(start: Vector3, end: Vector3, skipEntityID?: number, mask?: number, layer?: number, flags?: number): Nullable<TraceResult>
/** Button bits supported by command-level editing. Other incoming bits are preserved. */
declare const UserCmdButton: Readonly<{
	Attack: 1n
	Jump: 2n
	Duck: 4n
	Forward: 8n
	Back: 16n
	Left: 512n
	Right: 1024n
	Attack2: 2048n
}>
/**
 * The user-command pipeline: register handlers and attack listeners to edit each outgoing
 * command.
 */
declare const UserCmdManager: CUserCmdManager
/**
 * Every weapon, grenade, knife and pair of gloves the SDK names, with the Zeus, the C4 and the
 * defuse kit, by ItemDefinitionIndex.
 */
declare const WeaponInfos: Map<number, WeaponInfo>
/**
 * Every {@link WorldLayer} that exists now. The array is the SDK's own and changes as entities
 * come and go: read it, do not modify it.
 */
declare const WorldLayers: WorldLayer[]
/**
 * The icon an item is drawn with, by the name the weapon data gives it.
 *
 * Vector rather than raster: these are drawn at whatever size a slider asks for, and a png
 * scaled up is a png scaled up. The path is relative to a package's shipped files, so whoever
 * draws it resolves it first.
 */
declare function equipmentIcon(iconName: string): string
/**
 * Width of an equipment icon per unit of its height, read from the svg at `path`: its `viewBox`,
 * or its `width` and `height` when it has none. 1 when the file cannot be read or states no
 * size. The file is read once per path.
 *
 * @example
 * const width = height * equipmentIconAspect(equipmentIcon("ak47"))
 */
declare function equipmentIconAspect(path: string): number
