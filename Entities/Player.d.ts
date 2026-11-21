// AUTO-GENERATED - do not edit.
/**
 * The controller of one player slot (`CCSPlayerController`): name, Steam id, money and
 * connection. The body it drives is {@link Pawn}.
 */
declare class Player extends Entity {
	/**
	 * How the player's client stands with the server; `PlayerNeverConnected` until the server
	 * sends a state.
	 */
	public readonly Connected: EPlayerConnectedState
	/** The player's tick base, as the controller networks it. */
	public readonly TickBase: number
	/** The tick the controller is next due to think on. */
	public readonly NextThinkTick: bigint
	/** The player's 64-bit Steam id; `0n` for a bot. */
	public readonly SteamID: bigint
	/** The competitive teammate color assigned to this player's slot, from 0 to 4, or -1. */
	public readonly CompTeammateColor: number
	/** The player's name with line breaks removed; `"Unknown"` until the controller sends one. */
	public readonly PlayerName: string
	/** The player's clan tag; empty until the server sends one. */
	public readonly Clan: string
	/** The team the player coaches, as the number the server sends; -1 until it sends one. */
	public readonly CoachingTeam: number
	/**
	 * The player's money services as networked (`m_iAccount`, `m_iStartAccount`, …);
	 * `undefined` until the server sends them. {@link Money} reads it.
	 */
	public MoneyServices: Nullable<EntityPropertiesNode>
	/**
	 * Whether the player is alive, as the controller networks it (`m_bPawnIsAlive`); false until
	 * the server sends it. `LifeStateChanged` fires with the player when it changes.
	 */
	public get IsAlive(): boolean
	/** Whether the player is on no side that plays: team `Spectator`, `Neutral` or `None`. */
	public get IsSpectator(): boolean
	/** The pawn the player is playing right now, which is a bot's while they control one. */
	public get Pawn(): Nullable<PlayerPawn>
	/**
	 * The player's own pawn. It differs from {@link Player.Pawn} while the player controls a bot,
	 * and what that bot's pawn does is credited to the bot.
	 */
	public get PlayerPawn(): Nullable<PlayerPawn>
	/** The player's money: `m_iAccount` of {@link MoneyServices}, 0 while there are none. */
	public get Money(): number
	/** The player's deaths in the match; 0 until the server sends a count. */
	public get Deaths(): number
	/** Whether this is the player at this client, the one `LocalPlayer` holds. */
	public get IsLocalPlayer(): boolean
}
