// AUTO-GENERATED - do not edit.
/**
 * One hitbox placed in the world, in the pose the entity stands in right now.
 *
 * A box is described by its eight corners, a sphere by its centre and radius, and a capsule by the
 * centres of its two caps and radius — the shapes the model itself declares, rather than one
 * bounding box standing in for all of them.
 */
declare class WorldHitbox {
	/** The bone this hitbox rides, which is what maps it to a body part. */
	public BoneName: string
	/** Where the hitbox stands in its model's set: the order a lag-compensation pose keeps. */
	public HitboxIndex: number
	/** Which damage group a hit here lands in, and so which multiplier it takes. */
	public GroupID: number
	/** Box, sphere or capsule, as the model declares the hitbox. */
	public Shape: EHitboxShape
	/** Radius of a sphere or capsule, the model's times its bone's scale; unused for a box. */
	public Radius: number
	/** Centre for a sphere, first cap for a capsule, centre for a box. */
	public readonly Start: Vector3
	/** Second cap of a capsule; equal to Start for a sphere and unused for a box. */
	public readonly End: Vector3
	/**
	 * The eight corners of a box, in the entity's current pose. Empty for other shapes, and only
	 * allocated for a model that actually declares a box.
	 */
	public Corners: Vector3[]
	/**
	 * How far along a ray it first enters this hitbox, in world units from `origin`, or -1 when
	 * the ray passes it by. `direction` must be normalized.
	 * @example
	 * const distance = box.IntersectRay(eye, Vector3.AngleVectors(angles).Normalize())
	 */
	public IntersectRay(origin: Vector3, direction: Vector3): number
}
/** What `FillPosedHitboxes` names the transforms it asks for by. */
type EPoseKey = EPoseKey.Bone | EPoseKey.Hitbox
declare namespace EPoseKey {
	/** The skeleton bone each hitbox rides: how a live skeleton is read. */
	type Bone = 0
	/** Each hitbox's place in its set: how a lag-compensation pose keeps one transform a hitbox. */
	type Hitbox = 1
}
