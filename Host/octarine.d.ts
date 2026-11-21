// AUTO-GENERATED - do not edit.
/**
 * Two bones a skeleton drawing joins with a line, by the names the model gives them.
 * `Entity.BoneLinks` holds the ones of an entity.
 */
declare interface BoneLink {
	/** Name of the bone the line starts at. */
	from: string
	/** Name of the bone the line ends at. */
	to: string
}

/**
 * A {@link BoneLink} resolved against an entity's model: each bone as its index and as the body
 * part it belongs to. `Entity.GetCachedBoneLinks` hands them out by body part.
 */
interface BoneLinkCached {
	/** Index of the bone the link starts at, as `Entity.GetBonePositionNative` takes it. */
	fromIdx: number
	/** Index of the bone the link ends at, as `Entity.GetBonePositionNative` takes it. */
	toIdx: number
	/** Body part of the bone the link starts at, as an `EBoneType`. */
	fromType: number
	/** Body part of the bone the link ends at, as an `EBoneType`. */
	toType: number
}
