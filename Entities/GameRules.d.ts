// AUTO-GENERATED - do not edit.
/**
 * The match's game rules (`CCSGameRulesProxy`): its clock and pauses, the state of the round and
 * of the match, and the radar bounds. `GameRules` holds the one that exists.
 */
declare class CGameRules extends Entity {
	/** The entity's index: the low bits of its {@link Handle}. */
	public readonly Index: number
	/**
	 * `GameState.RawGameTime`, copied here on every server tick: the game clock in seconds, which
	 * stands still during a pause.
	 */
	public RawGameTime: number
	/** Whether the match is paused; `GameState.RawGameTime` stands still while it is. */
	public readonly IsPaused: boolean
	/** Server ticks the match has spent paused; `GameState.CurrentGameTick` leaves them out. */
	public readonly TotalPausedTicks: number
	/**
	 * The server tick the pause began at. While {@link IsPaused}, `GameState.CurrentGameTick`
	 * stands at this tick less {@link TotalPausedTicks}.
	 */
	public readonly PauseStartTick: number
	/**
	 * When the match clock started, in seconds on the `GameState.RawGameTime` clock;
	 * {@link GameTime} counts from it.
	 */
	public readonly GameStartTime: number
	/** Whether the round is in its freeze time, before play starts. */
	public readonly FreezePeriod: boolean
	/** Whether the match is in warmup. */
	public readonly WarmupPeriod: boolean
	/** When the warmup started. */
	public readonly WarmupPeriodStart: number
	/** Whether the Terrorists' timeout is running. */
	public readonly TerroristTimeOutActive: boolean
	/** Whether the Counter-Terrorists' timeout is running. */
	public readonly CTTimeOutActive: boolean
	/** How much of the Terrorists' timeout is left. */
	public readonly TerroristTimeOutRemaining: number
	/** How much of the Counter-Terrorists' timeout is left. */
	public readonly CTTimeOutRemaining: number
	/** A count of the Terrorists' timeouts. */
	public readonly TerroristTimeOuts: number
	/** A count of the Counter-Terrorists' timeouts. */
	public readonly CTTimeOuts: number
	/** Whether the match is in a technical timeout. */
	public readonly TechnicalTimeOut: boolean
	/** Whether the match is on hold, waiting to be resumed. */
	public readonly MatchWaitingForResume: boolean
	/** Length of a round's freeze time. */
	public readonly FreezeTime: number
	/** Length of a round. */
	public readonly RoundTime: number
	/** When the match started. */
	public readonly MatchStartTime: number
	/**
	 * When the round's play starts, in seconds on the `GameState.RawGameTime` clock; during the
	 * freeze time it is still ahead.
	 */
	public readonly RoundStartTime: number
	/**
	 * When the next round starts once a round has ended, in seconds on the
	 * `GameState.RawGameTime` clock.
	 */
	public readonly RestartRoundTime: number
	/** Whether a restart of the game is flagged. */
	public readonly GameRestart: boolean
	/** A timer for the start of the match's next phase. */
	public readonly TimeUntilNextPhaseStarts: number
	/** The phase the match is in, as the server numbers it. */
	public readonly GamePhase: number
	/** How many rounds the match has played. */
	public readonly TotalRoundsPlayed: number
	/** How many rounds the match has played in its current {@link GamePhase}. */
	public readonly RoundsPlayedThisPhase: number
	/** Which overtime the match is playing, as the server numbers it. */
	public readonly OvertimePlaying: number
	/** How many hostages remain. */
	public readonly HostagesRemaining: number
	/** Whether any hostage has been reached. */
	public readonly AnyHostageReached: boolean
	/** Whether the map has a bomb site. */
	public readonly MapHasBombTarget: boolean
	/** Whether the map has a hostage rescue zone. */
	public readonly MapHasRescueZone: boolean
	/** Whether the map has a zone players can buy in. */
	public readonly MapHasBuyZone: boolean
	/** Whether the match came from the matchmaking queue. */
	public readonly IsQueuedMatchmaking: boolean
	/** The mode of the queued match, as the server numbers it. */
	public readonly QueuedMatchmakingMode: number
	/** Whether the match runs on one of Valve's dedicated servers. */
	public readonly IsValveDS: boolean
	/** Whether the map is flagged as a logo map. */
	public readonly LogoMap: boolean
	/** Whether the server is set to play every step sound itself. */
	public readonly PlayAllStepSoundsOnServer: boolean
	/** How many spectator slots the server has. */
	public readonly SpectatorSlotCount: number
	/** The match's device, as the server numbers it. */
	public readonly MatchDevice: number
	/** Whether the match has begun. */
	public readonly HasMatchStarted: boolean
	/** The next map, as its number in the map group. */
	public readonly NextMapInMapgroup: number
	/** Name of the tournament event the match belongs to; empty until the server sends one. */
	public readonly TournamentEventName: string
	/** Stage of the tournament event the match belongs to; empty until the server sends one. */
	public readonly TournamentEventStage: string
	/** The match's stat text; empty until the server sends one. */
	public readonly MatchStatTxt: string
	/** The tournament predictions text; empty until the server sends one. */
	public readonly TournamentPredictionsTxt: string
	/** The tournament predictions percentage. */
	public readonly TournamentPredictionsPct: number
	/** When the reveal of item drops starts. */
	public readonly CMMItemDropRevealStartTime: number
	/** When the reveal of item drops ends. */
	public readonly CMMItemDropRevealEndTime: number
	/** Whether the match is handing out item drops. */
	public readonly IsDroppingItems: boolean
	/** Whether the match is eligible for quests. */
	public readonly IsQuestEligible: boolean
	/** Whether HLTV is active on the server. */
	public readonly IsHltvActive: boolean
	/** Whether the bomb is planted; the planted bomb itself is a `PlantedC4` entity. */
	public readonly BombPlanted: boolean
	/** Whether the bomb lies dropped, with no player carrying it. */
	public readonly BombDropped: boolean
	/** The win status of the round, as the server numbers it. */
	public readonly RoundWinStatus: number
	/** Why the round was won, as the server numbers it. */
	public readonly RoundWinReason: number
	/** Whether the Terrorists are barred from buying. */
	public readonly TCantBuy: boolean
	/** Whether the Counter-Terrorists are barred from buying. */
	public readonly CTCantBuy: boolean
	/** The N of the best-of-N map series the match belongs to. */
	public readonly NumBestOfMaps: number
	/** Random seed of the Halloween mask list. */
	public readonly HalloweenMaskListSeed: number
	/** The winning team of the latest round end, as the server numbers teams. */
	public readonly RoundEndWinnerTeam: number
	/** The reason of the latest round end, as the server numbers it. */
	public readonly RoundEndReason: number
	/** Whether the latest round end is set to show a defend timer. */
	public readonly RoundEndShowTimerDefend: boolean
	/** The timer time the latest round end carries. */
	public readonly RoundEndTimerTime: number
	/** Token of the round-end fun fact; empty until the server sends one. */
	public readonly RoundEndFunFactToken: string
	/**
	 * Slot of the player the round-end fun fact is about, counted from 0; -1 until the server has
	 * sent one.
	 */
	public readonly RoundEndFunFactPlayerSlot: number
	/** First number that goes with the round-end fun fact. */
	public readonly RoundEndFunFactData1: number
	/** Second number that goes with the round-end fun fact. */
	public readonly RoundEndFunFactData2: number
	/** Third number that goes with the round-end fun fact. */
	public readonly RoundEndFunFactData3: number
	/** The message of the latest round end; empty until the server sends one. */
	public readonly RoundEndMessage: string
	/** The player count the latest round end carries. */
	public readonly RoundEndPlayerCount: number
	/** Whether the latest round end goes without music. */
	public readonly RoundEndNoMusic: boolean
	/** The legacy value the latest round end carries. */
	public readonly RoundEndLegacy: number
	/** A counter of round ends. */
	public readonly RoundEndCount: number
	/** The round number the latest round start carries. */
	public readonly RoundStartRoundNumber: number
	/** A counter of round starts: a change in it means a new round has begun. */
	public readonly RoundStartCount: number
	/** Whether a round is being played; false in the intermission after one ends. */
	public readonly RoundInProgress: boolean
	/** The number of the first round of the second half. */
	public readonly FirstSecondHalfRound: number
	/** A bomb site, as the server numbers sites. */
	public readonly BombSite: number
	/**
	 * Handle of the player pawn that planted the bomb, as `EntityManager.EntityByIndex` resolves
	 * it; 0 until the server sends one.
	 */
	public readonly BombPlanter: number
	/** A counter of match ends. */
	public readonly MatchEndCount: number
	/** Which variant of the team intro the Terrorists get, as the server numbers it. */
	public readonly TTeamIntroVariant: number
	/** Which variant of the team intro the Counter-Terrorists get, as the server numbers it. */
	public readonly CTTeamIntroVariant: number
	/** Whether the match is in its team intro. */
	public readonly TeamIntroPeriod: boolean
	/** A count of the Counter-Terrorists' consecutive losses. */
	public readonly NumConsecutiveCTLoses: number
	/** A count of the Terrorists' consecutive losses. */
	public readonly NumConsecutiveTerroristLoses: number
	/** Why the match was aborted early, as the server numbers it. */
	public readonly MatchAbortedEarlyReason: number
	/** Random seed of the match. */
	public readonly MatchSeed: number
	/** Whether blockers are flagged as present. */
	public readonly BlockersPresent: boolean
	/** Types of the end-of-match map group vote, as the server numbers them. */
	public readonly EndMatchMapGroupVoteTypes: number[]
	/** Options of the end-of-match map group vote, as the server numbers them. */
	public readonly EndMatchMapGroupVoteOptions: number[]
	/** Winner of the end-of-match map vote, as the server numbers it. */
	public readonly EndMatchMapVoteWinner: number
	/** Indices of the items the match prohibits. */
	public readonly ProhibitedItemIndices: number[]
	/** Accounts of the tournament casters active in the match, as the server numbers them. */
	public readonly TournamentActiveCasterAccounts: number[]
	/** Each round's result for the match stats, as the server numbers results. */
	public readonly MatchStatsRoundResults: number[]
	/** Counts of Counter-Terrorists alive, for the match stats. */
	public readonly MatchStatsPlayersAliveCT: number[]
	/** Counts of Terrorists alive, for the match stats. */
	public readonly MatchStatsPlayersAliveT: number[]
	/** Respawn wave times, by team. */
	public readonly TeamRespawnWaveTimes: number[]
	/** Times of the next respawn waves. */
	public readonly NextRespawnWave: number[]
	/** Heights of the minimap's vertical sections. */
	public readonly MinimapVerticalSectionHeights: number[]
	/** When the warmup ends. */
	public readonly WarmupPeriodEnd: number
	/**
	 * The low corner of the world area the radar covers; invalid until the server sends it. A
	 * change emits `MinimapSizeChanged`.
	 */
	public readonly MinimapMins: Vector3
	/**
	 * The high corner of the world area the radar covers; invalid until the server sends it. A
	 * change emits `MinimapSizeChanged`.
	 */
	public readonly MinimapMaxs: Vector3
	/**
	 * Seconds on the match clock: {@link RawGameTime} less {@link GameStartTime}, standing still
	 * during a pause.
	 */
	public get GameTime(): number
}
