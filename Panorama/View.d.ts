// AUTO-GENERATED - do not edit.
/** A game-context Panorama view with Update/Dispose methods and automatic cleanup on script unload. */
declare class CPanoramaView<Args extends unknown[]> {
	/** Optional panelID selects a descendant's own script context and follows its recreation. */
	constructor(window: PanoramaWindow, id: string, path: string, panelID?: string | undefined)
	/** True after installation; the game may still be waiting to run the queued script. */
	public get Installed(): boolean
	/** Installs the view when its root exists, then updates it. Call inside MainThread.Queue. */
	public Update(...args: Args): void
	/** Removes the view and its unload handler. Call inside MainThread.Queue. */
	public Dispose(): void
}
