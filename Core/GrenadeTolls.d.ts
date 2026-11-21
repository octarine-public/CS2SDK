// AUTO-GENERATED - do not edit.
/** How a player comes out of the HE grenades about to go off. */
declare const enum EBlastFate {
	Survives = 0,
	/** Dies on the unlucky end of the spread the server rolls, lives on the lucky one. */
	MayDie = 1,
	Dies = 2
}
/**
 * Health the HE grenades already in the air take off one player once they go off. The server
 * measures each blast to a point it rolls anywhere between seven tenths of the eye height and the
 * eyes, so a toll is a spread; the fraction of a point the server banks between hits is not
 * networked and can add one more.
 */
interface GrenadeToll {
	/** The least health they take. */
	readonly low: number
	/** The most health they take. */
	readonly high: number
	/** Whether the toll kills them: at its least, only at its most, or not at all. */
	readonly fate: EBlastFate
}
/**
 * What the HE grenades already in the air are about to take off every player, worked out the way
 * the server does it at the spot each one goes off. The forecast belongs to Visuals > Grenades >
 * Thrown grenades > HE damage and is refreshed every frame it runs; with that card off, or no HE
 * in the air, every player reads nothing.
 *
 * @example
 * const toll = GrenadeTolls.TollOf(pawn)
 * if (toll !== undefined) {
 * 	label = `HE ${GrenadeTolls.Text(toll)}`
 * }
 */
declare class CGrenadeTolls {
	/** What the HE grenades in the air take off `pawn`, or nothing while none reaches him. */
	public TollOf(pawn: PlayerPawn): Nullable<Readonly<GrenadeToll>>
	/**
	 * A toll as it is written over the world: the most it takes, `-57`. The top of the spread is
	 * what the server lands on more often than not, and one number holds its shape where a range
	 * that opens and closes as the player moves does not.
	 */
	public Text(toll: Readonly<GrenadeToll>): string
}
