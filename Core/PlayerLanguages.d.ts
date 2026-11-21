// AUTO-GENERATED - do not edit.
/** Languages available for chat messages and their editor. */
type PlayerChatLanguage = "en" | "ru" | "cn"
/**
 * The chat language of each player in the match, told from their chat messages and nickname.
 * Use the {@link PlayerLanguages} instance.
 */
interface CPlayerLanguages {
	/** Every code {@link For} can answer: `"en"`, `"ru"` and `"cn"`. */
	readonly Supported: readonly PlayerChatLanguage[]
	/** Uses the latest recognized chat language, then the nickname, then English. */
	For(player: Nullable<Player>): PlayerChatLanguage
}
