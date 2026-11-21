// AUTO-GENERATED - do not edit.
/**
 * The game's own localization (resource/csgo_<language>.txt from the VPKs), used to resolve
 * item/sticker/paint-kit tokens such as "#CSGO_customplayer_ctm_sas".
 *
 * Language units are read lazily on first use and flattened into a flat token -> string map,
 * and resolved lookups are memoized, so a per-frame Localize() of the same token is a single
 * map hit. The active language follows the one selected in the menu; a token missing there
 * falls back to english, and a token missing everywhere is returned unchanged.
 */
interface CGameLocalization {
	/** The language currently being resolved against (the menu language, or english). */
	get ActiveLanguage(): string
	/**
	 * Resolve a game localization token. Accepts it with or without the leading "#".
	 * Returns the token unchanged when no translation exists in any loaded language.
	 */
	Localize(token: string): string
	/** Resolve against a specific language, ignoring the menu selection. Not memoized. */
	LocalizeIn(language: string, token: string): string
	/** Whether a translation exists in the active language or in english. */
	Has(token: string): boolean
	/** Drop every loaded language and cached lookup; the next Localize re-reads the files. */
	Reload(): void
}
