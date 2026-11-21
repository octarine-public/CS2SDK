// AUTO-GENERATED - do not edit.
/**
 * A player's body in the world (`CCSPlayerPawn`): where it looks, its armor, flash and scope,
 * and the weapon in its hands. The player driving it is {@link Controller}.
 */
declare class PlayerPawn extends Entity {
	/** The angles the pawn's eyes point at, as the server sends them. */
	public readonly AngEyeAngles: QAngle
	/** Whether the pawn is immune to damage; {@link ImmunityTime} is when that ends. */
	public readonly Immunity: boolean
	/** Whether the pawn is currently defusing the bomb. */
	public readonly IsDefusing: boolean
	/** Game time in seconds (`GameState.RawGameTime`) the pawn's immunity ends at. */
	public readonly ImmunityTime: number
	/**
	 * Whether the pawn is scoped in, as the server sends it. The local pawn's is read from the
	 * client's own prediction once a frame instead, where the game exposes it.
	 */
	public IsScoped: boolean
	/** hrtime() of the last IsScoped transition */
	public IsScopedChangeTime: number
	/**
	 * How long the pawn's latest flash lasts, in seconds from when it landed.
	 * {@link LeftFlashTime} is what is left of it.
	 */
	public readonly FlashDuration: number
	/** The strongest the pawn's latest flash gets, out of 255. */
	public readonly FlashMaxAlpha: number
	/** The pawn's armor points. */
	public readonly ArmorValue: number
	/** Shots the pawn has fired in its current spray, rising with each one. */
	public readonly ShotsFired: number
	/**
	 * The pawn's flag bits. The lowest (`Flags & 1`) is set while it is on the ground, though for
	 * other players it can read clear while they stand still: {@link IsAirborne} allows for that.
	 */
	public readonly Flags: number
	/** Whether the pawn is standing inside a bomb site's plant zone. */
	public readonly InBombZone: boolean
	/**
	 * Bomb site the pawn is standing in, as the index a plant made there would carry — 0 for
	 * A, 1 for B. It says nothing on its own, reading 0 outside a site as well, so it is the
	 * site only while {@link InBombZone}.
	 */
	public readonly BombZone: number
	/** Whether the pawn has the buy menu open. `GameState.IsShopOpen` follows the local pawn's. */
	public readonly IsBuyMenuOpen: boolean
	/** The pawn's player state; `STATE_ACTIVE` until the server sends another. */
	public readonly PlayerState: EPlayerState
	/**
	 * The pawn's weapon services as networked (`m_hActiveWeapon`, `m_hMyWeapons`, …);
	 * `undefined` until the server sends them. {@link ActiveWeapon} reads it.
	 */
	public WeaponServices: Nullable<EntityPropertiesNode>
	/**
	 * The pawn's item services as networked: `m_bHasDefuser` and `m_bHasHelmet`. `undefined`
	 * until the server sends them.
	 * @example
	 * const helmet = pawn.ItemServices?.get<boolean>("m_bHasHelmet") ?? false
	 */
	public ItemServices: Nullable<EntityPropertiesNode>
	/** The view angle changes the server last sent for the pawn; empty until it sends any. */
	public ServerViewAngleChanges: ViewAngleServer[]
	/** The player that controls the pawn; `undefined` while it has none on this client. */
	public get Controller(): Nullable<Player>
	/**
	 * Seconds until {@link ImmunityTime} while the pawn is immune; 0 while it is not, and once
	 * that time has passed.
	 */
	public get LeftImmunityTime(): number
	/** Seconds remaining until the current flash effect ends, or zero when not flashed. */
	public get LeftFlashTime(): number
	/**
	 * Whether the pawn is off the ground: neither its on-ground flag nor its ground entity says
	 * otherwise. The flag alone is not enough for other players, whose `m_fFlags` can read
	 * airborne while they stand still.
	 */
	public get IsAirborne(): boolean
	/**
	 * Whether the pawn carries a defuse kit: `m_bHasDefuser` of {@link ItemServices}, false
	 * while there are none.
	 */
	public get HasDefuser(): boolean
	/**
	 * The weapon in the pawn's hands. `null` while {@link WeaponServices} carries no
	 * `m_hActiveWeapon`, `undefined` while that handle names no entity on this client.
	 */
	public get ActiveWeapon(): Nullable<WeaponBase> | null
	/** Refreshes visibility against posed hitboxes; smoke visibility requires the same unobstructed ray. */
	public UpdateVisibility(camera?: Vector3): void
}
