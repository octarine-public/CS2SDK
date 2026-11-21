// AUTO-GENERATED - do not edit.
/** A model's skeleton read as body parts, and the links between those parts. */
declare namespace BoneData {
	/** The bones an entity keeps in its `Bones` out of its model's skeleton, by name. */
	const AllowedBoneNames: Set<string>
	/**
	 * The skeleton as pairs of bone names, one pair per segment between two joints. An entity whose
	 * model has any of {@link AllowedBoneNames} takes its `BoneLinks` from this list.
	 */
	const BaseBoneLink: BoneLink[]
	/** The {@link EBoneType} of a bone, `undefined` for a name outside {@link AllowedBoneNames}. */
	const GetBoneTypeByName: (name: string) => EBoneType | undefined
}
