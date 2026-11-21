// AUTO-GENERATED - do not edit.
/**
 * The queue for work that needs a main-thread session of the game; the SDK creates and destroys
 * its particles through it. Each frame, what was queued runs inside one session, one task after
 * another in the order it was queued, so no two tasks reach the engine at once. A frame that
 * comes while the previous batch is still running starts nothing, and what it would have run
 * waits for a later frame.
 */
declare class AsyncManager {
	/** How many tasks wait for a flush. A batch that is already running is not counted. */
	public static get QueuedCount(): number
	/**
	 * Queue a task to run during the next per-frame main-thread flush. The task may
	 * be sync or async; the returned promise settles with its result (or its error)
	 * once it has run. Inside the task it is safe to await the native particle ops -
	 * the flush holds the main-thread session for the whole batch.
	 */
	public static Queue<T>(task: () => T | Promise<T>): Promise<T>
}
