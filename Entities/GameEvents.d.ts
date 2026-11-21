// AUTO-GENERATED - do not edit.
/** Damage one player dealt another, as `player_hurt` reports it. */
declare class PlayerHurtEvent {
	/** The pawn that took the damage. */
	public readonly Victim: Nullable<PlayerPawn>
	/** The pawn that dealt it, or nothing for damage no player owns. */
	public readonly Attacker: Nullable<PlayerPawn>
	/** The controller of the player that took the damage. */
	public readonly VictimController: Nullable<Player>
	/** The controller of the player that dealt it, `undefined` when the event names none. */
	public readonly AttackerController: Nullable<Player>
	/** The victim's health after the hit. */
	public readonly Health: number
	/** The victim's armor after the hit. */
	public readonly Armor: number
	/** The damage the hit did to health. */
	public readonly DamageHealth: number
	/** The damage the hit did to armor. */
	public readonly DamageArmor: number
	/** The damage group the hit landed in. */
	public readonly HitGroup: EHitGroup
	/** The weapon's class name without its `weapon_` prefix, as the event spells it. */
	public readonly Weapon: string
	/** Whether {@link HitGroup} is `EHitGroup.Head`. */
	public get IsHeadshot(): boolean
}
/** Where a bullet landed, and who fired it. */
declare class BulletImpactEvent {
	/** The pawn that fired the bullet. */
	public readonly Shooter: Nullable<PlayerPawn>
	/** The controller of the player that fired it. */
	public readonly ShooterController: Nullable<Player>
	/** The point the bullet hit, in world coordinates. */
	public readonly Position: Vector3
}
/** A player losing their body, as `player_death` reports it. */
declare class PlayerDeathEvent {
	/** The pawn that died. */
	public readonly Victim: Nullable<PlayerPawn>
	/** The pawn that killed it, or nothing for a death no player owns. */
	public readonly Attacker: Nullable<PlayerPawn>
	/** The pawn that assisted, `undefined` for a kill nobody assisted. */
	public readonly Assister: Nullable<PlayerPawn>
	/** The controller of the player that died. */
	public readonly VictimController: Nullable<Player>
	/** The controller of the player that made the kill, `undefined` when the event names none. */
	public readonly AttackerController: Nullable<Player>
	/** The controller of the player that assisted, `undefined` for a kill nobody assisted. */
	public readonly AssisterController: Nullable<Player>
	/** The weapon's class name without its `weapon_` prefix, as the event spells it. */
	public readonly Weapon: string
	/** Whether the event flags the kill as a headshot. */
	public readonly IsHeadshot: boolean
	/** The damage group `player_death` names for the kill. */
	public readonly HitGroup: EHitGroup
	/** Damage to health, as `player_death` reports it. */
	public readonly DamageHealth: number
	/** Damage to armor, as `player_death` reports it. */
	public readonly DamageArmor: number
	/** How far the shot travelled, in metres. */
	public readonly Distance: number
	/** How many players the bullet went through on its way, or zero. */
	public readonly Penetrated: number
	/** Whether the event flags the kill as made without a scope. */
	public readonly NoScope: boolean
	/** Whether the event flags the kill as made through smoke. */
	public readonly ThroughSmoke: boolean
	/** Whether the assist was a flash rather than damage. */
	public readonly AssistedFlash: boolean
	/** Whether the event flags the killer as blinded. */
	public readonly AttackerBlind: boolean
	/** Whether the event flags the killer as in the air. */
	public readonly AttackerInAir: boolean
}
/** A player taking a body, as `player_spawn` reports it. */
declare class PlayerSpawnEvent {
	/** The pawn that spawned. */
	public readonly Pawn: Nullable<PlayerPawn>
	/** The controller of the player that spawned. */
	public readonly Controller: Nullable<Player>
}
/** An entity the server took off the map. */
declare class EntityKilledEvent {
	/**
	 * The entity killed: whoever holds the index the event names when `EntityKilled` is emitted,
	 * `undefined` for index 0 or a free one.
	 */
	public readonly Killed: Nullable<Entity>
	/** The entity that made the kill, read the same way as {@link Killed}. */
	public readonly Attacker: Nullable<Entity>
	/** What dealt the damage — a grenade or a fire, where it was not the attacker themselves. */
	public readonly Inflictor: Nullable<Entity>
	/** The `DMG_` bits the kill carried, as the game packs them. */
	public readonly DamageBits: number
}
/** A shot leaving a weapon, as `weapon_fire` reports it. */
declare class WeaponFireEvent {
	/** The pawn that fired. */
	public readonly Shooter: Nullable<PlayerPawn>
	/** The controller of the player that fired. */
	public readonly ShooterController: Nullable<Player>
	/**
	 * The weapon's class name. This event spells it in full, `weapon_ak47`, where `player_hurt`
	 * drops the prefix and says `ak47`.
	 */
	public readonly Weapon: string
	/** Whether the event reports the weapon as silenced. */
	public readonly Silenced: boolean
}
/**
 * A sound a player made loudly enough for the game to tell anyone about it — what the sound
 * emitter raises for a footstep, and what a sound ESP is built on.
 */
declare class PlayerSoundEvent {
	/** The pawn that made the sound. */
	public readonly Pawn: Nullable<PlayerPawn>
	/** The controller of the player that made it. */
	public readonly Controller: Nullable<Player>
	/** How far the sound carries, in world units. */
	public readonly Radius: number
	/** How long the sound lasts. */
	public readonly Duration: number
	/** Whether this was a footstep rather than any other sound the player made. */
	public readonly IsStep: boolean
}
/** A vote a player cast. */
declare class VoteCastEvent {
	/** The controller of the player that voted. */
	public readonly Controller: Nullable<Player>
	/** `0` for yes and `1` for no; any other value is a slot that cast neither. */
	public readonly Option: number
	/** Whether the vote is a yes: {@link Option} is 0. */
	public get IsYes(): boolean
	/** Whether the vote is a no: {@link Option} is 1. */
	public get IsNo(): boolean
}
