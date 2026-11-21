// AUTO-GENERATED - do not edit.
/** A tunable numeric parameter of a layer. The menu turns these into sliders. */
interface ChamsParam {
	/** the shader parameter it writes, e.g. "g_flFresnelExponent" */
	key: string
	/** label shown in the menu */
	label: string
	/** Explains the visible result of changing this parameter. */
	tooltip: string
	/**
	 * Its default: what the material is built with unless {@link ChamsLayerOptions.value} answers
	 * another.
	 */
	value: number
	/** Lowest value its slider offers. {@link CChamsCatalog.LayerMaterial} does not clamp to it. */
	min: number
	/** Highest value its slider offers, likewise not clamped to. */
	max: number
	/** decimal places the slider shows, 0 for an integer */
	precision?: number
	/** the glyph its slider carries, for a parameter whose own icon says more than a slider */
	icon?: string
}
/** One draw of a style. Layers are drawn in the order they are declared. */
interface ChamsLayerDef {
	/** unique within the style; keys the created material */
	name: string
	/** the .vfx this layer draws with */
	shader: string
	/** fixed KV lines. No shader line and no through-wall flag - both are added for you */
	body: string
	/** tunable parameters, written after the body so they win over anything it set */
	params?: readonly ChamsParam[]
	/**
	 * Marks a layer that draws no colour and only fills the depth buffer under the layers after
	 * it. {@link CChamsCatalog.PreviewMaterials} leaves it out. A script that draws the style on
	 * an entity has to give it a transparent colour in the colour list of `ChamsSDK.SetStyle`,
	 * where it would otherwise take the entity's, and keep it out of the through-wall layers,
	 * where it writes no depth.
	 */
	depthOnly?: boolean
}
/** A chams look: the layers it draws, in order, under the name the menu lists it by. */
interface ChamsStyleDef {
	/** What a menu lists the style as; {@link CChamsCatalog.Names} holds these in order. */
	name: string
	/** Its layers in draw order. An index here is the `layerIndex` the catalog's methods take. */
	layers: readonly ChamsLayerDef[]
}
/** What a layer's material is built with beyond its own definition. */
interface ChamsLayerOptions {
	/**
	 * The value a tunable parameter is set to, by the index of its layer in the style and its key.
	 * A parameter it has no answer for keeps the value its layer declares.
	 */
	value?: (layerIndex: number, key: string) => Nullable<number>
	/** Draw through walls: the depth test is switched off the way the layer's shader spells it. */
	throughWall?: boolean
	/** Replaces the layer's own g_vColorTint, as [r, g, b, a] where 1 is the declared full value. */
	tint?: readonly number[]
	/** Fades the whole layer through its opacity scale, 1 leaving it as declared. */
	opacity?: number
	/**
	 * Points texture parameters at other resources, by key: the layer's own line for each is
	 * dropped and one naming the given .vtex written instead.
	 */
	textures?: Readonly<Record<string, string>>
	/**
	 * Keeps the material apart from the one another script builds out of the same layer. A material
	 * is keyed by the hash of its text, so identical text is one material between every caller, and
	 * a parameter one of them writes into it live moves the other's look as well. Written as a KV3
	 * comment, which the shader never sees; one line, no line breaks.
	 */
	owner?: string
}
/**
 * The chams styles every CS2 script draws with, and the inline KV3 each of their layers is built
 * from. The text is what `CreateChamsMaterial` takes for an entity and what
 * `GFXInstance.SetSubmeshMaterial` takes for a preview model, so the two draw one look.
 *
 * @example
 * const [material] = ChamsCatalog.PreviewMaterials(ChamsCatalog.Names.indexOf("Fresnel"))
 * instance.SetSubmeshMaterial(0, 0, material)
 */
declare class CChamsCatalog {
	/** Every style, in the order a menu lists them. */
	public get Styles(): readonly ChamsStyleDef[]
	/** The styles' names, index for index with {@link Styles}. */
	public readonly Names: readonly string[]
	/** The g_vColorTint a layer declares, or white where it declares none. */
	public LayerTint(layer: ChamsLayerDef): [number, number, number, number]
	/**
	 * One layer of a style as inline KV3. The same options always give the same text, and the
	 * game keys a material by the hash of its text, so a value that moves every frame belongs in
	 * a live parameter rather than here.
	 */
	public LayerMaterial(styleIndex: number, layerIndex: number, options?: ChamsLayerOptions): Nullable<string>
	/**
	 * A style's layers as a preview model draws them: every layer but the depth-only ones, which
	 * a preview has nothing to be occluded by, and none of them through walls.
	 *
	 * `color` is multiplied into each layer's own tint, scaled down as a whole when a channel runs
	 * past one so the hue survives a tint that boosts brightness. Without it every layer keeps the
	 * tint it declares, which is neutral on every style, for a model whose colour is its instance
	 * tint instead - one material per style, whatever colour it is shown in.
	 */
	public PreviewMaterials(styleIndex: number, color?: Color, opacity?: number, value?: (layerIndex: number, key: string) => Nullable<number>): string[]
}
