// AUTO-GENERATED - do not edit.
/** An automatic command attack. Undefined leaves the command untouched. */
type UserCmdAttack = "primary" | "secondary" | undefined
/** One synchronous command-edit transaction; Prediction is available within its callback. */
interface UserCmdContext {
	/** Identifies the native request being edited. */
	readonly RequestId: bigint
	/** The engine's sequence number for the command. */
	readonly CommandNumber: number
	/** Physical primary/secondary attack bits supplied by native input, independent of automatic edits. */
	readonly ManualButtons: number
	/** A read-only view of the command as it arrived, before any edits. */
	readonly original: UserCmdView
	/** The editable command for this request. */
	readonly command: CommandBuilder
}
/** A registered handler. Handlers start disabled; higher priorities run later. */
interface UserCmdHandler {
	/** The handler's unique name. */
	readonly Name: string
	/** Whether the handler runs on each command. */
	Enabled: boolean
	/** Removes the handler; further writes to {@link Enabled} throw. */
	Dispose(): void
}
/**
 * Decides a command's automatic attack. Receives the shooter's eye position (`x`, `y`, `z`) and
 * view angles (`angleX`, `angleY`, `angleZ`), and the editable `command`.
 */
type CommandListener<T> = (x: number, y: number, z: number, angleX: number, angleY: number, angleZ: number, command: CommandBuilder) => T
/** Composes synchronous command edits into one native response. */
interface CUserCmdManager {
	/** Registers a composable command editor. Each handler's edits roll back on failure.
	 * freshAttack clears carried automatic attacks before any handler runs, preserving physical attacks.
	 * @example
	 * const handler = UserCmdManager.AddHandler("movement.example", ({ command }) => {
	 *     command.move.Set(1, 0)
	 * })
	 * handler.Enabled = true
	 */
	AddHandler(name: string, callback: (context: UserCmdContext) => void, options?: {
		priority?: number
		freshAttack?: boolean
	}): UserCmdHandler
	/** Registers a primary-attack decision; the listener starts disabled. */
	AddListener(listener: CommandListener<boolean>): number
	/** Registers either attack mode. The first enabled listener requesting an attack wins.
	 * The final callback argument is the editable command for this request.
	 * freshAttack reevaluates automatic attack bits on every command build; physical attacks are preserved.
	 * endOfTick adds an attack subtick at fraction 1. */
	AddAttackListener(listener: CommandListener<UserCmdAttack>, freshAttack?: boolean, endOfTick?: boolean): number
	/** Removes a listener and refreshes the native command hook. */
	RemoveListener(listenerId: number): void
	/** Enables a listener; forceSync also resends the combined hook state to native code. */
	SetListenerEnabled(listenerId: number, enabled: boolean, forceSync?: boolean): void
	/** Requests mouse blocking for this frame. False never cancels another caller's request.
	 * Requests must be renewed each Draw; unrenewed requests expire on the following Draw.
	 */
	RequestMouseInputDisabled(disabled?: boolean): void
	/** Logs incoming attack-related commands before SDK edits, then stops after maxRecords.
	 * Set maxRecords to 0 to stop. Disable automatic attacks when recording manual input.
	 * @example UserCmdManager.LogManualAttacks(128)
	 */
	LogManualAttacks(maxRecords?: number): void
}
