// AUTO-GENERATED - do not edit.
/** Native input metadata carried beside the protobuf; never contains engine pointers. */
interface CommandMetadata {
	/** Identifies the native request this command answers. */
	readonly requestId: bigint
	/** The engine's sequence number for the command. */
	readonly commandNumber: number
	/** The command kind the engine assigned. */
	readonly kind: number
	/** The held-button word: a bitmask of the buttons down this command. */
	readonly held: bigint
	/** The changed-button word: the bits whose held state changed this command. */
	readonly changed: bigint
	/** The engine's third button word carried with the command. */
	readonly state3: bigint
}
/**
 * Owned, lossless v1 command envelope.
 * Validates framing and top-level wire structure, not command semantics or nested schemas.
 * Submission is request-bound and validated separately. Unknown fields and optional presence stay byte-identical.
 */
declare class CommandBytes {
	/** Copies an envelope, respecting the input view's byte offset and length. */
	public static FromBytes(input: Uint8Array): CommandBytes
	/** Wraps protobuf bytes without decoding them into objects or filling defaults. */
	public static FromProtobuf(payload: Uint8Array, metadata: CommandMetadata): CommandBytes
	/** Returns a detached metadata value; no mutation affects the snapshot. */
	public get Metadata(): CommandMetadata
	/** Returns an owned envelope, suitable for binary transport. */
	public ToBytes(): Uint8Array
	/** Returns an owned protobuf payload, including all unknown fields. */
	public ToProtobuf(): Uint8Array
}
