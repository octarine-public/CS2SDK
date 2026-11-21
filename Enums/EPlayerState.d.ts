// AUTO-GENERATED - do not edit.
/**
 * The state a player's pawn is in (`STATE_ACTIVE`, `STATE_DEATH_ANIM`, `STATE_OBSERVER_MODE`, …);
 * `PlayerPawn.PlayerState` and `ObserverPawn.PlayerState` hold one, networked as
 * `m_iPlayerState`.
 */
type EPlayerState = EPlayerState.STATE_ACTIVE | EPlayerState.STATE_WELCOME | EPlayerState.STATE_PICKINGTEAM | EPlayerState.STATE_PICKINGCLASS | EPlayerState.STATE_DEATH_ANIM | EPlayerState.STATE_DEATH_WAIT_FOR_KEY | EPlayerState.STATE_OBSERVER_MODE | EPlayerState.STATE_GUNGAME_RESPAWN | EPlayerState.STATE_DORMANT | EPlayerState.NUM_PLAYER_STATES
declare namespace EPlayerState {
	type STATE_ACTIVE = 0
	type STATE_WELCOME = 1
	type STATE_PICKINGTEAM = 2
	type STATE_PICKINGCLASS = 3
	type STATE_DEATH_ANIM = 4
	type STATE_DEATH_WAIT_FOR_KEY = 5
	type STATE_OBSERVER_MODE = 6
	type STATE_GUNGAME_RESPAWN = 7
	type STATE_DORMANT = 8
	type NUM_PLAYER_STATES = 9
}
