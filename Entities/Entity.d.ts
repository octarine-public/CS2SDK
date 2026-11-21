// AUTO-GENERATED - do not edit.
/**
 * The local player's `Player` entity, from its creation until it is destroyed; `undefined`
 * outside a game. Its pawn is `LocalPlayer.Pawn`.
 */
declare var LocalPlayer: Nullable<Player>
/** The game rules entity, or `undefined` while there is none. */
declare let GameRules: Nullable<CGameRules>
/**
 * A networked entity, and the base of every entity wrapper the SDK hands out through
 * `EntityManager` and the entity events.
 */
declare class Entity {
	/**
	 * The entity's index: the low bits of its {@link Handle}, and its key in
	 * `AllEntitiesAsMap`.
	 */
	public readonly Index: number
	/** The entity's simulation time as the server last sent it; 0 until it sends one. */
	public readonly SimulationTime = 0
	/**
	 * Current health; 0 until the server sends it. The SDK sets it to 0 when `EntityKilled` names
	 * the entity while it still reads alive.
	 */
	public HP: number
	/** Maximum health; 0 until the server sends it. */
	public readonly MaxHP: number
	/** Rate the entity's animation plays at; 1 until the server sends one. */
	public readonly PlaybackRate: number
	/** The shape the entity is solid as (`SOLID_BBOX`, `SOLID_VPHYSICS`, …). */
	public readonly SolidType: ESolidType
	/**
	 * Whether the entity is a platform a player stands on, and if so whether the player turns
	 * with its yaw.
	 */
	public readonly PlatformType: EEntityPlatformTypes
	/**
	 * How the engine works out the bounds surrounding the entity (`USE_HITBOXES`,
	 * `USE_OBB_COLLISION_BOUNDS`, …).
	 */
	public readonly SurroundType: ESurroundingBoundsType
	/** The entity's movement mode (`WALK`, `FLY`, `NOCLIP`, …). */
	public readonly MoveType: EMoveType
	/**
	 * Whether a shot traced from the camera to the middle of one of the entity's hitboxes lands
	 * on it, as `PlayerPawn.UpdateVisibility` last found. Outside a pause the SDK refreshes every
	 * player pawn once a server tick; the local pawn, a dead or dormant one and any other kind
	 * of entity read false.
	 */
	public IsVisibleRay: boolean
	/**
	 * Whether, on top of {@link IsVisibleRay}, the line from the camera to where that shot landed
	 * is clear of smoke and of anything else that blocks sight. Refreshed together with it.
	 */
	public IsVisibleRayMask: boolean
	/** Whether the entity still exists; false from the moment it is destroyed. */
	public IsValid: boolean
	/** The server's network class name for the entity, such as `CCSPlayerPawn`. */
	public ClassName: string
	/** Resource path of the entity's model; "" while it has none or the path is unknown. */
	public ModelName: string
	/** The entities attached to this one: those whose {@link ParentEntity} it is. */
	public Children: Entity[]
	/**
	 * Whether the server networks the entity to this client now: false while it is dormant and
	 * after it is destroyed. A dormant entity keeps the values it last received.
	 */
	public IsVisible: boolean
	/** Whether this is the game rules entity, the one `GameRules` holds. */
	public IsGameRules: boolean
	/**
	 * Scale of the entity's model; 1 until the server sends one. It also scales where the
	 * entities attached to this one stand.
	 */
	public ModelScale: number
	/**
	 * Game time in seconds (`GameState.RawGameTime`) when the entity last went dormant or was
	 * destroyed; 0 until then.
	 */
	public BecameDormantTime: number
	/**
	 * The model's bones the SDK knows a type of (`EBoneType`), as `[name, index]` with the index
	 * into {@link TotalBones}. Empty until the model has loaded.
	 */
	public Bones: [string, number][]
	/**
	 * The skeleton's segments as pairs of bone names, from the head down the spine to the arms
	 * and legs: one list for every model, whichever of those bones it has. Empty until the model
	 * has loaded with bones the SDK knows.
	 */
	public BoneLinks: BoneLink[]
	/**
	 * Names of every bone of the model, in the model's order; empty until it has loaded. Every
	 * entity of the same model shares the array: do not modify it.
	 */
	public TotalBones: string[]
	/**
	 * Native data of the entity's model; `undefined` while the entity has no model, and from a
	 * model change until the new model has loaded.
	 */
	public ModelData: Nullable<ModelData>
	/**
	 * The entity's team; `Team.None` until the server sends one. A change fires
	 * `EntityTeamChanged`.
	 */
	public Team: Team
	/**
	 * The entity's life state; `LIFE_DEAD` until the server sends one. The SDK also sets
	 * `LIFE_DEAD` when `EntityKilled` names an entity that reads alive, and `LIFE_ALIVE` when
	 * `PlayerSpawn` names a pawn that does not. A change fires `LifeStateChanged`.
	 */
	public LifeState: LifeState
	/**
	 * Where the core draws the entity this frame. Every networked move resets it to
	 * {@link NetworkedPosition}; a frame the core sends a position for overwrites it.
	 */
	public readonly VisualPosition: Vector3
	/**
	 * World position from the last network update, carried through the parent's transform for an
	 * entity with a {@link ParentEntity}.
	 */
	public readonly NetworkedPosition: Vector3
	/**
	 * The angles the core draws the entity with this frame. Every networked move resets them to
	 * {@link NetworkedAngles}; a frame the core sends a rotation for overwrites them.
	 */
	public readonly VisualAngles: QAngle
	/** The velocity the core sends for the entity with a drawn frame; zero until it sends one. */
	public readonly VisualVelocity: Vector3
	/**
	 * World angles in degrees from the last network update, combined with the parent's for an
	 * entity with a {@link ParentEntity}.
	 */
	public readonly NetworkedAngles: QAngle
	/**
	 * Velocity in units per second, worked out from how the networked position moves from one
	 * server tick to the next. The SDK keeps it for player pawns and holds it while the game is
	 * paused; zero for a dead or dormant pawn and for any other entity.
	 */
	public readonly NetworkedVelocity: Vector3
	/**
	 * The entity's box as offsets from {@link VisualPosition}. With the model loaded: its bounds
	 * in height and {@link RingRadius} to each side. From a model change until then:
	 * `RingRadius` (50 where that is 0) to each side and up from the position. All zero for an
	 * entity the server has sent no model for.
	 */
	public readonly BoundingBox: AABB
	/**
	 * Game time in seconds (`GameState.RawGameTime`) when a particle message last reported where
	 * the entity is, into {@link PredictedPosition}; 0 until one has.
	 */
	public LastPredictedPositionUpdate: number
	/** The same game time as {@link LastPredictedPositionUpdate}: the SDK sets both together. */
	public LastRealPredictedPositionUpdate: number
	/**
	 * The entity's position as the last particle message reporting it gave it; invalid
	 * (`IsValid` false) until one has. {@link LastPredictedPositionUpdate} says when.
	 */
	public readonly PredictedPosition: Vector3
	/**
	 * The entity the server names as this one's owner; `undefined` while it names none or that
	 * entity does not exist on this client, and filled in once it arrives.
	 */
	public OwnerEntity: Nullable<Entity>
	/**
	 * The entity this one is attached to, whose transform its {@link NetworkedPosition} and
	 * {@link NetworkedAngles} follow; `undefined` while it has none on this client.
	 */
	public ParentEntity: Nullable<Entity>
	/** Posed model hitboxes, cached for this frame and server tick. Treat the returned shapes as read-only. */
	public get Hitboxes(): readonly WorldHitbox[]
	/**
	 * {@link VisualVelocity} while a frame draws (`GameState.IsInDraw`), {@link NetworkedVelocity}
	 * otherwise.
	 */
	public get Velocity(): Vector3
	/** The entity's name from the server's `EntityNames` string table; "" while it has none. */
	public get Name(): string
	/**
	 * The entity that owns this one, such as the pawn carrying a weapon; `undefined` while there
	 * is none on this client.
	 */
	public get Owner(): Nullable<Entity>
	/** The last entity up the chain of {@link Owner}s, or `undefined` when this has no owner. */
	public get RootOwner(): Nullable<Entity>
	/**
	 * {@link VisualPosition} while a frame draws (`GameState.IsInDraw`), {@link NetworkedPosition}
	 * otherwise.
	 */
	public get Position(): Vector3
	/**
	 * {@link VisualAngles} while a frame draws (`GameState.IsInDraw`), {@link NetworkedAngles}
	 * otherwise.
	 */
	public get Angles(): QAngle
	/** The yaw of {@link NetworkedAngles} in degrees, 180 or more taken down by 360. */
	public get NetworkedRotation(): number
	/** The yaw of {@link Angles} in degrees, 180 or more taken down by 360. */
	public get Rotation(): number
	/**
	 * When the entity was created: the creation time the server sends or, when it sends none,
	 * the game time in seconds (`GameState.RawGameTime`) at which the SDK first saw the entity.
	 */
	public get CreateTime(): number
	/** {@link HP} as a percentage of {@link MaxHP}; 0 when {@link MaxHP} is 0. */
	public get HPPercent(): number
	/** {@link HP} as a fraction of {@link MaxHP}, 1 at full health; 0 when {@link MaxHP} is 0. */
	public get HPPercentDecimal(): number
	/**
	 * Whether {@link LifeState} is `LIFE_ALIVE` or `LIFE_RESPAWNING`. A `Player` answers what its
	 * controller networks instead.
	 */
	public get IsAlive(): boolean
	/** {@link Rotation} in radians. */
	public get RotationRad(): number
	/** {@link NetworkedRotation} in radians. */
	public get NetworkedRotationRad(): number
	/** Whether the entity is on the neutral team (`Team.Neutral`). */
	public get IsNeutral(): boolean
	/**
	 * The farthest the model's bounds reach from its origin along x or y; 30 until a model has
	 * loaded. Once the server has sent a model, {@link BoundingBox} reaches this far to each side.
	 */
	public get RingRadius(): number
	/**
	 * The id native calls name this entity by, its index shifted left one bit: a trace that hit it
	 * has it as `TraceResult.EntityID`, and `Trace` skips it given as `skipEntityID`.
	 */
	public get CustomNativeID(): number
	/**
	 * Whether the entity stands in the view of this frame's camera, widened a little past the
	 * screen's edges. For a player pawn it is a flag the core sets for the pawns it finds on screen
	 * before the frame's draw, so a drawer skips a pawn off screen without projecting it; anything
	 * else, which the core does not list, is projected on access. Always true while the core lists
	 * nothing (`Source2SDK.OnScreenListKnown`), so a drawer that skips what is off screen draws
	 * everything there.
	 * @example
	 * if (!enemy.IsOnScreen) {
	 * 	return
	 * }
	 */
	public get IsOnScreen(): boolean
	public set IsOnScreen(value: boolean)
	/**
	 * The entity's handle: its serial above its {@link Index}, as networked fields name entities
	 * and `EntityManager.EntityByIndex` resolves them.
	 */
	public get Handle(): number
	/** Unit vector of the entity's facing ({@link RotationRad}) on the horizontal plane. */
	public get Forward(): Vector3
	/**
	 * Index in {@link TotalBones} of the bone named `name`, or -1 when {@link Bones} has none of
	 * that name: a bone the SDK knows no type of is not found.
	 */
	public GetBoneIndexByName(name: string): number
	/** Whether `serial` is this entity's serial; 0 on either side matches any. */
	public SerialMatches(serial: number): boolean
	/** Whether `handle` names this entity: its index, and a serial that {@link SerialMatches}. */
	public HandleMatches(handle: number): boolean
	/** Whether `ent` is this same object. */
	public EntityMatches(ent: Entity): boolean
	/**
	 * Distance from {@link Position} to `vec`, or to another entity's position; in meters with
	 * `toMeters`, otherwise in game units.
	 */
	public Distance(vec: Vector3 | Entity, toMeters?: boolean): number
	/** As {@link Distance}, on the horizontal plane: the heights are left out. */
	public Distance2D(vec: Vector3 | Vector2 | Entity, toMeters?: boolean): number
	/** The square of {@link Distance}; in square meters with `toMeters`. */
	public DistanceSqr(vec: Vector3 | Entity, toMeters?: boolean): number
	/** The square of {@link Distance2D}; in square meters with `toMeters`. */
	public DistanceSqr2D(vec: Vector3 | Vector2 | Entity, toMeters?: boolean): number
	/**
	 * Angle in radians, 0 to π, between {@link Forward} and the direction `front`; 0 when `front`
	 * has zero length.
	 */
	public AngleBetweenFaces(front: Vector3): number
	/** The point `distance` units ahead of {@link Position} along {@link Forward}. */
	public InFront(distance: number): Vector3
	/**
	 * The point `distance` units from {@link Position} on the horizontal plane, in the direction
	 * of the facing turned by `angle` radians.
	 */
	public InFrontFromAngle(angle: number, distance: number): Vector3
	/** As {@link FindRotationAngle}, measured from `currPos`. */
	public GetAngle(position: Vector3 | Entity, currPos?: Vector3): number
	/**
	 * Angle in radians, 0 to π, on the horizontal plane between the entity's facing and the
	 * direction from {@link Position} to `vec`.
	 */
	public FindRotationAngle(vec: Vector3 | Entity): number
	/**
	 * Cosine of the angle, on the horizontal plane, between the entity's facing and the direction
	 * from `currPos` to `source`: 1 straight ahead, -1 straight behind.
	 */
	public GetSourceAngleToForward(source: Vector3 | Entity, currPos?: Vector3): number
	/** Whether `ent` is closer than `range` units on the horizontal plane. */
	public IsInRange(ent: Vector3 | Vector2 | Entity, range: number): boolean
	/**
	 * The entity of `ents` nearest to this one; `undefined`, whatever the return type says, when
	 * `ents` is empty. `toMeters` does not change the answer.
	 */
	public Closest(ents: Entity[], toMeters?: boolean): Entity
	/**
	 * The group of `groups` whose point, as `callback` gives it, lies nearest this entity, with
	 * that point; an empty array and a zero vector when `groups` is empty. `toMeters` does not
	 * change the answer.
	 */
	public ClosestGroup(groups: Entity[][], toMeters: boolean | undefined, callback: (entity: Entity[]) => Vector3): [Entity[], Vector3]
	/**
	 * Whether the entity's team differs from `ent`'s, or from the local player's team when `ent`
	 * is left out. While `mp_teammates_are_enemies` is on, teams do not count: every entity is an
	 * enemy except `ent` itself, or the local player's pawn when `ent` is left out.
	 */
	public IsEnemy(ent?: Entity): boolean
	/**
	 * Whether the entity is ducked or in the middle of ducking. False for an entity the server
	 * sends no movement state for.
	 */
	public IsDucking(): boolean
	/** Reads the pose once per frame, tick and draw context, in native-sized batches. */
	public UpdateBonePositionCache(): boolean
	/**
	 * World position of the bone at `index` in {@link TotalBones}. The bones of {@link Bones} are
	 * read together, once per frame and server tick; any other bone takes a native call each
	 * time. When the bone cannot be read, as for a dormant or destroyed entity, the result is the
	 * entity's own {@link Position} vector, not a copy.
	 */
	public GetBonePositionNative(index: number): Vector3
	/** Copies a bone position into caller-owned storage without allocating a vector. */
	public GetBonePositionXYZ(index: number, out: number[] | Float64Array, at?: number): void
	/** Pre-resolved bone links for skeleton consumers. */
	public GetCachedBoneLinks(type: EBoneType): Nullable<readonly BoneLinkCached[]>
	/**
	 * Position of the bone of `boneType` in the first link of {@link BoneLinks} that touches the
	 * type and has both its bones in the model; `undefined` when there is no such link, or until
	 * the model has loaded with bones the SDK knows.
	 */
	public GetBoneLinkPositionsByType(boneType: EBoneType, isFirst: true): Nullable<Vector3>
	/**
	 * Start and end position of every link in {@link BoneLinks} that touches `boneType` and has
	 * both its bones in the model: an empty array when none does, `undefined` until the model has
	 * loaded with bones the SDK knows.
	 */
	public GetBoneLinkPositionsByType(boneType: EBoneType): Nullable<[Vector3, Vector3][]>
	/**
	 * Position of the first bone in {@link Bones} of type `boneType`; `undefined` when the model
	 * has none, or until it has loaded with bones the SDK knows.
	 */
	public GetBonePositionsByType(boneType: EBoneType, isFirst: true): Nullable<Vector3>
	/**
	 * Position of every bone in {@link Bones} of type `boneType`, each in an array of its own: an
	 * empty array when the model has none, `undefined` until it has loaded with bones the SDK
	 * knows.
	 */
	public GetBonePositionsByType(boneType: EBoneType): Nullable<[Vector3][]>
	/** Resets the velocity baseline after a lifecycle transition. */
	public ResetVelocity(): void
	/** The entity's {@link Name}. */
	public toString(): string
}
