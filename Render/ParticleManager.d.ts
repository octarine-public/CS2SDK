// AUTO-GENERATED - do not edit.
/**
 * Where a particle system attaches. A plain enum rather than a `const enum`: the bundler
 * transpiles each file on its own, so nothing inlines it and the emitted code needs a real
 * object to read. The native side takes these values as plain numbers.
 */
declare enum ParticleAttachment {
	INVALID = -1,
	ABSORIGIN = 0,
	ABSORIGIN_FOLLOW = 1,
	CUSTOMORIGIN = 2,
	CUSTOMORIGIN_FOLLOW = 3,
	POINT = 4,
	POINT_FOLLOW = 5,
	EYES_FOLLOW = 6,
	OVERHEAD_FOLLOW = 7,
	WORLDORIGIN = 8,
	ROOTBONE_FOLLOW = 9,
	RENDERORIGIN_FOLLOW = 10,
	MAIN_VIEW = 11,
	WATERWAKE = 12,
	CENTER_FOLLOW = 13,
	CUSTOM_GAME_STATE_1 = 14
}
/**
 * Spawns particle effects in the world and takes them down again: each when its lifetime runs
 * out, all of them when a game starts or ends. A spawn is queued with {@link AsyncManager}, so
 * the particle appears on a following frame, not when the call returns.
 */
declare class ParticleManager {
	/** The particle {@link SpawnTrail} draws its ribbon with. */
	public static readonly TracerParticle = "particles/entity/spectator_utility_trail.vpcf"
	/** The particle {@link SpawnLightning} draws its bolt with. */
	public static readonly LightningParticle = "particles/cs2_oct_lightning_tracer.vpcf"
	/** The particle {@link SpawnStrike} draws its strike with. */
	public static readonly StrikeParticle = "particles/cs2_oct_lightning_strike.vpcf"
	/** The effects offered for a bullet impact: the particle of each and the name a menu shows. */
	public static readonly ImpactParticles: {
		path: string
		name: string
	}[]
	/** The effects offered for a player's death: the particle of each and the name a menu shows. */
	public static readonly DeathParticles: {
		path: string
		name: string
	}[]
	/**
	 * `"None"` followed by the names of {@link ImpactParticles}, as a dropdown lists them. An index
	 * here is the id {@link GetImpactParticlePathByID} takes.
	 */
	public static readonly ImpactParticleNames: string[]
	/**
	 * The names of {@link DeathParticles}, index for index. An index here is the id
	 * {@link GetDeathParticlePathByID} takes.
	 */
	public static readonly DeathParticleNames: string[]
	/** How many particles it has created and not yet destroyed; queued spawns do not count. */
	public static get SpawnedCount(): number
	/**
	 * Destroys every particle it created and drops the spawns still queued, answering how many it
	 * destroyed. The SDK calls it when a game starts and when one ends.
	 */
	public static DestroyAllParticles(): number
	/**
	 * The particle path for an index of {@link ImpactParticleNames}: `null` for 0, which is
	 * `"None"`, and for one outside the list.
	 */
	public static GetImpactParticlePathByID(id: number): string | null
	/** The particle path for an index of {@link DeathParticleNames}, `null` for one outside it. */
	public static GetDeathParticlePathByID(id: number): string | null
	/**
	 * Spawns the particle at `path` in the world at `position` and destroys it `lifetimeSeconds`
	 * of game time later; with 0 it stays until {@link DestroyAllParticles}. False, spawning
	 * nothing, for a `null` path; true once the spawn is queued.
	 *
	 * @param positionControlPoint the control point `position` is written to
	 * @param controlPoints further control points to set, by index
	 */
	public static SpawnParticleSystem(path: string | null, position: Vector3, lifetimeSeconds?: number, positionControlPoint?: number, controlPoints?: {
		[index: number]: Vector3
	}): boolean
	/**
	 * Spawns a crackling lightning bolt between two points that keeps re-forking until
	 * `duration` runs out.
	 */
	public static SpawnLightning(start: Vector3, end: Vector3, color: {
		r: number
		g: number
		b: number
		a: number
	}, duration: number, thickness: number): void
	/**
	 * Spawns one branched lightning strike from `top` down to `bottom`, shaped at random, with
	 * its return strokes and the glow it lights the cloud with.
	 * @param color The bolt's colour, each channel 0-1.
	 * @param brightness How bright it is drawn, 1 for its natural brightness.
	 */
	public static SpawnStrike(top: Vector3, bottom: Vector3, color: Vector3, brightness: number, thickness: number): void
	/**
	 * Spawns a ribbon from `start` to `end` and destroys it `duration` + 0.5 seconds of game time
	 * after it appears.
	 *
	 * @param color each channel 0-255
	 * @param ballistic how far, in units, the middle of the ribbon is lifted to bend it into an
	 * arc; 0 keeps it straight
	 */
	public static SpawnTrail(start: Vector3, end: Vector3, color: {
		r: number
		g: number
		b: number
		a: number
	}, duration: number, thickness: number, ballistic?: number): void
}
