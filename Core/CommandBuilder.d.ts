// AUTO-GENERATED - do not edit.
/** Normalized command-space movement. Positive Left moves left. */
interface CommandMove {
	/** Forward/back axis; positive moves forward. */
	readonly Forward: number
	/** Left/right axis; positive moves left. */
	readonly Left: number
	/** Up/down axis; positive moves up. */
	readonly Up: number
	/** Sets base movement and direction buttons, preserving existing subtick deltas. */
	Set(forward: number, left: number, up?: number): void
	/** Replaces directional/analog movement with forward input and a timed release plus cancelling yaw steps. Preserves other buttons and pitch steps. Returns false without edits if two slots cannot be reserved. Forward must be 0 or 1; when accepts [1/64, 1]. */
	SetTimedForward(forward: number, when: number, yawDelta: number): boolean
	/** Replaces directional subticks with full-tick movement. Preserves other buttons and pitch input; returns false if two slots cannot be reserved. */
	SetFullTick(forward: number, left: number): boolean
}
/** Base command angles; editing these does not edit history or the camera. */
interface CommandViewAngles {
	/** Pitch, in degrees. */
	readonly Pitch: number
	/** Yaw, in degrees. */
	readonly Yaw: number
	/** Roll, in degrees. */
	readonly Roll: number
	/**
	 * Sets the angles in degrees; `roll` defaults to the current roll. Throws when pitch is
	 * outside [-89, 89] or yaw or roll outside [-180, 180].
	 */
	Set(pitch: number, yaw: number, roll?: number): void
}
/** Command-level button state; explicit subtick edges are applied afterward. */
interface CommandButtons {
	/** The buttons held down, a bit mask numbered as {@link UserCmdButton} numbers them. */
	readonly Held: bigint
	/** Whether every bit in `button` is currently held. */
	IsDown(button: bigint): boolean
	/**
	 * Holds `button` when `pressed`, releases it otherwise; other buttons are left as they are.
	 * Throws for `0n` or a bit outside {@link UserCmdButton}.
	 */
	Set(button: bigint, pressed: boolean): void
}
/** A detached record of one input-history sample; absent protobuf values stay undefined. */
interface CommandHistorySample {
	/** The player command tick the engine recorded for the sample. */
	readonly PlayerTick: number | undefined
	/** The fraction into {@link PlayerTick} the engine recorded. */
	readonly PlayerFraction: number | undefined
	/** The render tick the engine recorded for the sample. */
	readonly RenderTick: number | undefined
	/** The fraction into {@link RenderTick} the engine recorded. */
	readonly RenderFraction: number | undefined
	/** The sample's pitch, in degrees. */
	readonly Pitch: number | undefined
	/** The sample's yaw, in degrees. */
	readonly Yaw: number | undefined
	/** The sample's roll, in degrees. */
	readonly Roll: number | undefined
}
/** Indexed access to engine-supplied history, which remains unchanged by movement edits. */
interface CommandHistory {
	/** The number of history samples. */
	readonly Count: number
	/** The sample at `index`, or undefined when `index` is out of range. */
	At(index: number): CommandHistorySample | undefined
}
/** A detached snapshot of a subtick step. */
interface CommandSubtick {
	/** The fraction of the tick at which the step applies, in [0, 1]. */
	readonly When: number
	/** The step's button bits, numbered as {@link UserCmdButton} numbers them; 0n for none. */
	readonly Button: bigint
	/** Whether the button is pressed; undefined when the step carries no button edge. */
	readonly Pressed: boolean | undefined
	/** Forward-movement delta added at this step, or undefined when it carries none. */
	readonly ForwardDelta: number | undefined
	/** Left-movement delta added at this step, or undefined when it carries none. */
	readonly LeftDelta: number | undefined
	/** Pitch delta in degrees added at this step, or undefined when it carries none. */
	readonly PitchDelta: number | undefined
	/** Yaw delta in degrees added at this step, or undefined when it carries none. */
	readonly YawDelta: number | undefined
}
/** Adds movement steps without replacing any incoming events. Maximum 32 steps after editing. */
interface CommandSubticks {
	/** The number of subtick steps on the command. */
	readonly Count: number
	/** The step at `index`, or undefined when `index` is out of range. */
	At(index: number): CommandSubtick | undefined
	/** Adds one Attack, Attack2, Jump or Duck edge at a fraction in [0, 1]. Equal-time edges keep insertion order. */
	AddButton(when: number, button: bigint, pressed: boolean): void
	/** Adds command-space movement deltas; does not change view angles. */
	AddAnalog(when: number, forwardDelta: number, leftDelta: number): void
	/** Adds relative view angles at a fraction in [0, 1). */
	AddView(when: number, pitchDelta: number, yawDelta: number): void
	/** Adds packed [when, pitchDelta, yawDelta] triples in one command update. */
	AddViewBatch(steps: Float64Array): void
}
/** Read-only incoming command. Its lifetime is limited to the handler callback. */
interface UserCmdView {
	/** Native request identity and the three full-width button words. */
	readonly Metadata: CommandMetadata
	/** The client tick this command belongs to. */
	readonly ClientTick: number
	/** Whether the command carries only input that movement simulation supports. */
	readonly IsMovementOnly: boolean
	/** Whether movement can be simulated with non-movement buttons suppressed in the copy. */
	readonly CanPredictMovement: boolean
	/** The command's movement, read-only. */
	readonly move: Omit<CommandMove, "Set" | "SetTimedForward" | "SetFullTick">
	/** The command's base view angles, read-only. */
	readonly view: Omit<CommandViewAngles, "Set">
	/** The command's held buttons, read-only. */
	readonly buttons: Omit<CommandButtons, "Set">
	/** The engine input-history samples, read-only. */
	readonly history: CommandHistory
	/** The command's subtick steps, read-only. */
	readonly subticks: Omit<CommandSubticks, "AddButton" | "AddAnalog" | "AddView" | "AddViewBatch">
}
/**
 * Edits a detached command using protobuf field numbers, never engine memory offsets.
 * Unedited fields retain their wire bytes, including unknown fields and optional presence.
 */
declare class CommandBuilder {
	/** Base command movement; existing analog subticks are preserved. */
	public readonly move: CommandMove
	/** Base command angles, independent of the recorded attack history. */
	public readonly view: CommandViewAngles
	/** Full-width held buttons with synchronized native/protobuf state. */
	public readonly buttons: CommandButtons
	/** Read-only engine input samples. */
	public readonly history: CommandHistory
	/** Stable, append-only movement events within this command. */
	public readonly subticks: CommandSubticks
	/** Creates an independent editor from a captured command envelope. */
	public static FromBytes(bytes: Uint8Array): CommandBuilder
	/** Native request identity and the three full-width button words. */
	public get Metadata(): CommandMetadata
	/** Client tick belonging to this command. */
	public get ClientTick(): number
	/** Number of engine-supplied input samples available for an attack. */
	public get HistoryCount(): number
	/** Returns the engine's attack history index, or undefined when the field is absent. */
	public GetAttackHistoryIndex(mode: "primary" | "secondary"): number | undefined
	/** Returns an independent editor, including edits already made. */
	public Clone(): CommandBuilder
	/** Encodes pending edits for submission or prediction; a no-op is byte-identical to the capture. */
	public ToBytes(): Uint8Array
	/** Whether this command contains only input supported by movement simulation. */
	public get IsMovementOnly(): boolean
	/** Whether movement can be simulated with non-movement buttons suppressed in the simulation copy. Weapon selection and impulses remain unsupported. */
	public get CanPredictMovement(): boolean
	/** Replaces the jump button words and removes jump edges from subticks, preserving other input.
	 * Used for grounded-press/airborne-release movement; later AddButton calls can schedule a timed jump.
	 */
	public SetJumpState(pressed: boolean, changed: boolean): void
	/** Sets duck state and removes duck edges while preserving other subtick data. */
	public SetDuckState(pressed: boolean, changed?: boolean): void
	/** Clears known movement subticks. Refuses attacks and unknown event fields without editing. */
	public ClearMovementSubticks(): boolean
	/** Sets all native and protobuf button words together. Unrelated protobuf fields survive. */
	public SetButtons(held: bigint, changed: bigint, state3: bigint): void
	/** Replaces edits from an owned candidate bound to the same native request. */
	public CopyFrom(candidate: CommandBuilder): void
	/** Selects an existing history sample without changing its angles or time. */
	public Attack(mode: "primary" | "secondary", history?: number): void
	/** Clears one automatic attack. clearSubticks also removes its edges while preserving other input. */
	public ClearAttack(mode: "primary" | "secondary", clearSubticks?: boolean): void
}
