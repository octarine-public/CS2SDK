// AUTO-GENERATED - do not edit.
/** Weapon and target parameters used by the engine penetration calculation. */
interface BulletTraceStats {
	/** Damage at the muzzle, above 0: `m_nDamage` in the weapon's data. */
	damage: number
	/** Penetration power, 0 or more: `m_flPenetration` in the weapon's data. */
	penetration: number
	/**
	 * How far the bullet flies, above 0: `m_flRange` in the weapon's data. A ray longer than
	 * that is cut to it.
	 */
	range: number
	/**
	 * Share of its damage the bullet keeps over distance, above 0 and at most 1:
	 * `m_flRangeModifier` in the weapon's data.
	 */
	rangeModifier: number
	/**
	 * Weapon armor penetration, 0 or more: `m_flArmorRatio` in the weapon's data. It and the fields
	 * below scale only the result's `damage`; a contact's damage is left raw.
	 */
	armorRatio: number
	/** Armor the target still carries, 0 once it is gone. */
	targetArmor: number
	/** Whether the target wears a helmet, without which its armor does not cover the head. */
	targetHasHelmet: boolean
	/** Weapon headshot multiplier, above 0: `m_flHeadshotMultiplier` in the weapon's data. */
	headshotMultiplier: number
	/** `mp_damage_scale_<team>_head` for the target's team. */
	headScale: number
	/** `mp_damage_scale_<team>_body` for the target's team. */
	bodyScale: number
}
/**
 * A reached surface contact. Damage is raw bullet damage, before target armor and hitgroup
 * scaling — hand it to `BulletDamage.Scale` for the health a target would lose.
 */
interface BulletTraceContact {
	/**
	 * `"entry"` where the bullet goes into a surface and `"exit"` where it comes out of it;
	 * `"impact"` for a hit that is neither, the target's among them.
	 */
	kind: "entry" | "exit" | "impact"
	/** Where the contact is, in world space. */
	position: Vector3
	/** Surface normal at the contact. */
	normal: Vector3
	/** Custom id of the entity touched, as `Entity.CustomNativeID`; 0 when there is none. */
	entityID: number
	/** The `EHitGroup` touched, 0 where the contact has no hitbox. */
	hitgroup: number
	/**
	 * Raw damage the bullet carries here: what it goes in with at an `"entry"`, what is left of
	 * it at an `"exit"` and an `"impact"`.
	 */
	damage: number
	/** Distance from the trace's `start` to the contact. */
	distance: number
}
/** Current-pose prediction, ending at the target, a blocking surface, or the requested range. */
interface BulletTraceResult {
	/**
	 * How the trace ended: `"target"` on the target, `"blocked"` when the bullet was stopped
	 * short, `"end"` when it ran its length meeting neither. `"invalid"` when an input was
	 * refused, a stat out of its bounds among them, or the target was hit where it takes no
	 * damage; `"unavailable"` when the host cannot trace bullets.
	 */
	status: "invalid" | "end" | "target" | "blocked" | "unavailable"
	/** Health the target loses, after hitgroup and armor, rounded down. 0 unless it was reached. */
	damage: number
	/** The `EHitGroup` the target is hit in. 0 unless it was reached. */
	hitgroup: number
	/** Distance from `start` to the hit on the target. 0 unless it was reached. */
	distance: number
	/** Every contact along the path, in the order the bullet makes them. */
	contacts: BulletTraceContact[]
}
/** Detailed bullet paths for visualization; does not fire or change entity poses. */
declare class BulletTrace {
	/** Traces the full aim ray without requiring a target. Contacts can include several players. */
	public static TraceRay(start: Vector3, end: Vector3, skip: Entity, stats: BulletTraceStats): BulletTraceResult
	/**
	 * Traces toward a target using current entity poses. Returns reached entry/exit points even
	 * when the target cannot be reached. A blocked entry has no corresponding reached exit.
	 * `damage` on the result is target damage; contact damage is unscaled bullet damage.
	 * Requires the native detailed-trace API. Historical trigger poses are not used.
	 */
	public static TraceTo(start: Vector3, end: Vector3, skip: Entity, target: Entity | undefined, stats: BulletTraceStats): BulletTraceResult
}
