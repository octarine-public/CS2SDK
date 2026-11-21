// AUTO-GENERATED - do not edit.
/** Target state and weapon scaling the damage formula reads. */
interface BulletDamageStats {
	/** Weapon armor penetration, `m_flArmorRatio` on the weapon data. */
	armorRatio: number
	/** Armor the target still carries, 0 once it is gone. */
	targetArmor: number
	/** Whether the target wears a helmet, without which its armor does not cover the head. */
	targetHasHelmet: boolean
	/** Weapon headshot multiplier, `m_flHeadshotMultiplier` on the weapon data. */
	headshotMultiplier: number
	/** `mp_damage_scale_<team>_head` for the target's team. */
	headScale: number
	/** `mp_damage_scale_<team>_body` for the target's team. */
	bodyScale: number
}
/**
 * The health a bullet takes off a player: the raw damage it arrives with, scaled by the hitgroup
 * it lands in and the team's damage scale, then cut by the armor over that hitgroup. The raw
 * damage is what a penetration trace reports, after range falloff and every surface crossed.
 *
 * @example
 * const team = target.Team === Team.Terrorist ? "t" : "ct"
 * const lost = BulletDamage.Scale(contact.damage, contact.hitgroup, {
 * 	armorRatio,
 * 	targetArmor: target.ArmorValue,
 * 	targetHasHelmet: target.ItemServices?.get<boolean>("m_bHasHelmet") ?? false,
 * 	headshotMultiplier,
 * 	headScale: ConVarsSDK.GetFloat(`mp_damage_scale_${team}_head`, 1),
 * 	bodyScale: ConVarsSDK.GetFloat(`mp_damage_scale_${team}_body`, 1)
 * })
 * if (lost >= target.HP) {
 * 	// the shot kills
 * }
 */
declare class BulletDamage {
	/** Whether a hitgroup registers damage at all — gear and misses do not. */
	public static IsDamaging(hitgroup: number): boolean
	/**
	 * Health lost to a bullet that arrived with `rawDamage` left, 0 when the hitgroup takes no
	 * damage. Rounded down, the way the game reports it.
	 *
	 * @param rawDamage impact damage from the trace, before hitgroup and armor scaling
	 */
	public static Scale(rawDamage: number, hitgroup: number, stats: BulletDamageStats): number
	/** Damage after the hitgroup multiplier and its team damage scale, armor aside. */
	public static ApplyHitgroup(damage: number, hitgroup: number, stats: BulletDamageStats): number
	/** Whether the target's armor covers that hitgroup — the head only under a helmet. */
	public static IsArmored(hitgroup: number, stats: BulletDamageStats): boolean
	/**
	 * Damage left after armor absorbs its share. Armor that cannot absorb the whole share breaks
	 * and the rest carries through, which is why a nearly broken vest stops almost nothing.
	 */
	public static ApplyArmor(damage: number, hitgroup: number, stats: BulletDamageStats): number
}
