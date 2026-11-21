// AUTO-GENERATED - do not edit.
/**
 * How a player's client stands with the server (connected, connecting, reconnecting, …);
 * `Player.Connected` holds one, networked as `m_iConnected`.
 */
declare const enum EPlayerConnectedState {
	PlayerNeverConnected = -1,
	PlayerConnected = 0,
	PlayerConnecting = 1,
	PlayerReconnecting = 2,
	PlayerDisconnecting = 3,
	PlayerDisconnected = 4,
	PlayerReserved = 5
}
