// AUTO-GENERATED - do not edit.
/** The shot the command being built fires, as the game is about to fire it. */
interface ShotContext {
	/** Where the bullet leaves from. */
	start: Vector3
	/** The view angles it is fired at. */
	angles: QAngle
	/** The recoil the game adds to those angles. */
	recoil: QAngle
	/** The tick it is fired on. */
	tick: number
	/** How far into that tick it is fired, 0 to 1. */
	fraction: number
	/** The weapon's inaccuracy at the shot. */
	inaccuracy: number
	/** The weapon's spread before inaccuracy. */
	baseSpread: number
	/** The recoil index the shot is fired at. */
	recoilIndex: number
	/** The spread offset the shot is seeded with, x and y. */
	spread: [number, number]
	/** The fire mode, 0 or 1. */
	weaponMode: number
	/** How many bullets the shot fires: more than one for a shotgun. */
	projectiles: number
	/** The entry of the command's input history the shot is fired from. */
	history: number
}
/** A gun's bullet as a penetration trace carries it, from the weapon's data. */
interface BulletWeapon {
	/** Damage at the muzzle. */
	damage: number
	/** Penetration power. */
	penetration: number
	/** How far the bullet flies, in units. */
	range: number
	/** Share of its damage the bullet keeps over each 500 units. */
	rangeModifier: number
}
/** How a bullet arrives. Its numbers mean something only while `reached` is true. */
interface Penetration {
	/** Whether the bullet gets to the target with at least the damage asked for. */
	reached: boolean
	/** The health it takes off, after hitgroup and armor, by the game's rules. */
	damage: number
	/** The damage it carries on arrival, before hitgroup and armor: what `BulletDamage.Scale` takes. */
	rawDamage: number
	/** The hitgroup it lands in, an `EHitGroup`. */
	hitgroup: number
	/** How far it travels, in units. */
	travel: number
}
/** The local player's weapon spread and recoil, as the game predicts them. Use `SpreadSDK`. */
interface CSpread {
	/** The recoil the game adds to the view angles of the next shot. */
	NextShotViewOffset(): QAngle
	/**
	 * The spread offset, x and y, a shot fired at `angles` on `tick` in fire mode `weaponMode` is
	 * seeded with.
	 */
	Calculate(angles: QAngle, tick: number, weaponMode: number): [number, number]
	/** The held weapon's inaccuracy now. */
	get Inaccuracy(): number
	/**
	 * The held weapon's recoil index as the client predicts it: one more for each shot, falling back
	 * toward 0 after the last. Undefined on a host built before it.
	 */
	get RecoilIndex(): Nullable<number>
}
/** The local player's weapon spread and recoil: the one {@link CSpread}. */
declare const SpreadSDK: CSpread
