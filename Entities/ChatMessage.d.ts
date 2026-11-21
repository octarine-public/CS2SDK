// AUTO-GENERATED - do not edit.
/** A player chat line received from the server. */
declare class ChatMessage {
	/** The sender's entity index, or -1 when the message names none. */
	public readonly PlayerIndex: number
	/** What the sender wrote; empty when the message carries no text. */
	public readonly Text: string
	/** Whether the message went to everyone rather than only the sender's team. */
	public readonly AllChat: boolean
	/** The sender captured when the message arrived, or undefined for an unknown sender. */
	public readonly Player: Nullable<Player>
}
