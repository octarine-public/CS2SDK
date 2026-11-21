// AUTO-GENERATED - do not edit.
/** CS2 collision masks, including posed player hitboxes. */
declare const enum ETraceMask {
	Solid = 1,
	Hitboxes = 2,
	/** Blocks sight rather than bullets, which is what a line-of-sight check traces against. */
	Opaque = 128,
	Window = 4096,
	PassBullets = 8192,
	Player = 262144,
	NPC = 524288,
	Debris = 1048576,
	MaskShot = 1847299,
	Shot = 1847307,
	/**
	 * Not a content bit: it asks {@link IsVisibleByRay} to sample smoke along the line and call a
	 * covered line blocked. The game strips it before tracing. A mask it is added to keeps only
	 * its bits from `Opaque` up: the lower ones, `Solid` and `Hitboxes` among them, do not reach
	 * the game.
	 */
	CheckSmoke = 1073741824,
	/** What {@link IsVisibleByRay} traces with by default: sight blockers, and smoke as cover. */
	LineOfSight = 1073741952
}
/**
 * What the game's own tracer answered.
 *
 * One instance is reused for every trace, so read what you need before tracing again — holding on
 * to it hands you the next trace's answer. Tracing runs per target per tick, and an object per
 * call would be an allocation on the aim engine's hot path.
 */
declare class TraceResult {
	/** Where the trace stopped, or its end point when it hit nothing. */
	public readonly Position: Vector3
	/** Surface normal at the hit, zero when nothing was hit. */
	public readonly Normal: Vector3
	/** How far along the ray the trace got: 1 means it reached the end unobstructed. */
	public Fraction: number
	/** Custom id of what was hit, 0 for the world or for nothing. */
	public EntityID: number
	/** Index of the hitbox that stopped the trace, -1 when it stopped on something without one. */
	public HitboxID: number
	/**
	 * Which damage group the hit landed in — the model's hitbox registration, not its physics
	 * hull. This is what decides the damage multiplier, so a shot worth taking is chosen by this
	 * and not by distance to a bone. -1 when nothing with hitboxes was hit.
	 */
	public HitGroup: number
	/** Contents mask of what was hit. */
	public Contents: number
	/** Whether anything stopped the trace before its end point. */
	public get Hit(): boolean
}
/**
 * Several rays, traced in one crossing into the game.
 *
 * Rays queued together cross into the game once instead of once each. Reuse a single instance: it
 * allocates on construction and never again, and the results it hands back are reused the same way
 * {@link Trace}'s is.
 *
 * @example
 * const batch = new TraceBatch()
 * // per frame:
 * batch.Reset()
 * for (const target of targets) batch.Add(camera, target.Position, localHero.CustomNativeID)
 * batch.Run()
 * for (let i = 0; i < targets.length; i++) {
 * 	const hit = batch.Get(i)
 * 	if (hit !== undefined && hit.EntityID === targets[i].CustomNativeID) {
 * 		// this one is in the open
 * 	}
 * }
 */
declare class TraceBatch {
	/** The most rays one batch carries. */
	public static get MaxRays(): number
	/** How many rays are queued for the next {@link Run}. */
	public get Count(): number
	/**
	 * Queues one ray. False when the batch is full — run it and start another.
	 *
	 * @param skipEntityID custom id to trace through, 0 to trace against everything
	 * @param mask contents to trace against
	 */
	public Add(start: Vector3, end: Vector3, skipEntityID?: number, mask?: number, layer?: number, flags?: number): boolean
	/**
	 * Traces every queued ray and answers a bitmask of the ones the game traced — bit `i` for the
	 * `i`th {@link Add}, and 0 when it traced none. Read the answers with {@link Get}.
	 */
	public Run(): number
	/**
	 * Whether {@link RunBox} can sweep boxes on this client: its trace backend has to know how,
	 * which a client built before box sweeps does not.
	 */
	public static get CanSweepBoxes(): boolean
	/**
	 * {@link Run} for a box instead of a point: every queued ray moves the box between `mins` and
	 * `maxs` around its start to its end, and stops where the game's own box would. The answers
	 * read as {@link Run}'s, the position being where the box's origin stopped. 0, tracing nothing,
	 * where {@link CanSweepBoxes} is false.
	 *
	 * @example
	 * const half = new Vector3(2, 2, 2)
	 * batch.Reset()
	 * batch.Add(from, to, 0, mask)
	 * if (batch.RunBox(half.Negate(), half) !== 0) {
	 * 	const fraction = batch.Fraction(0)
	 * }
	 */
	public RunBox(mins: Vector3, maxs: Vector3): number
	/**
	 * What the `i`th queued ray hit, or `undefined` when the game did not trace it. Valid until
	 * the next {@link Run}, which writes the answers over these same objects.
	 */
	public Get(index: number): Nullable<TraceResult>
	/**
	 * How far the `i`th queued ray got, 1 when it reached its end, or `undefined` when the game did
	 * not trace it: {@link Get}'s `Fraction` without reading the rest of the answer, for a caller
	 * that looks further only at the rays that hit.
	 *
	 * @example
	 * for (let i = 0; i < batch.Count; i++) {
	 * 	const fraction = batch.Fraction(i)
	 * 	if (fraction !== undefined && fraction < 1) {
	 * 		const hit = batch.Get(i)
	 * 	}
	 * }
	 */
	public Fraction(index: number): Nullable<number>
	/** Drops the queued rays and their answers, ready to be filled again. */
	public Reset(): void
}
