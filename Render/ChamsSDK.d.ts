// AUTO-GENERATED - do not edit.
/**
 * The game's chams: materials built from KV3 text, styles that lay those materials over a mesh, and
 * the style each entity is drawn in. Colors are packed `0xAABBGGRR`. Use the `ChamsSDK` instance.
 */
interface CChams {
	/**
	 * Builds a material from the KV3 text of a `.vmat` and answers the id that names it, -1 while the
	 * chams system is not up yet. The build runs later on the main thread, so a layer whose material
	 * is not built yet does not draw. The same text answers the same material.
	 * @example
	 * const flat = ChamsSDK.CreateMaterial("materials/octarine/flat.vmat", kv3)
	 */
	CreateMaterial(name: string, kv3: string): number
	/**
	 * Declares style `style`: up to four materials drawn over a mesh in order, `visible` where the
	 * entity stands in front of the world and `invisible` where it is behind it. A color list tints
	 * the layer at the same place, an entry left undefined taking the entity's color.
	 * `keepOriginal` draws the entity's own material under the layers; `visiblePriorities` orders
	 * the visible layers of every entity, lowest first. Call it when materials are built, not per
	 * frame.
	 * @example
	 * ChamsSDK.SetStyle(style, [flat], [flat], undefined, undefined, true)
	 */
	SetStyle(style: number, visible: number[], invisible: number[], visibleColors?: Nullable<number>[], invisibleColors?: Nullable<number>[], keepOriginal?: boolean, visiblePriorities?: number[]): void
	/**
	 * Writes `value` into parameter `name` of a built material, a number to all four components. It
	 * lands on the next frame. False when the material is not built yet or has no such parameter.
	 */
	SetMaterialParam(material: number, name: string, value: number | number[]): boolean
	/**
	 * Draws the entity whose custom id is `entity` in style `style`, tinted `visibleColor` in front
	 * of the world and `invisibleColor` behind it, until {@link RemoveEntityStyle}. The per-frame
	 * call.
	 */
	SetEntityStyle(entity: number, style: number, visibleColor: number, invisibleColor: number): void
	/** Whether the host can split an entity's style ({@link SetEntitySplitStyle}). */
	get CanSplitEntityStyle(): boolean
	/**
	 * Draws the parts of entity `entity` whose material name contains `materialPart`, such as the
	 * bare hands a glove model draws around the glove, in a style of their own; a negative style
	 * leaves them as they are and `""` clears it. The entity's own style has to be on for either to
	 * draw. False on a host that cannot ({@link CanSplitEntityStyle}).
	 */
	SetEntitySplitStyle(entity: number, materialPart: string, style: number, visibleColor: number, invisibleColor: number): boolean
	/** Draws the entity whose custom id is `entity` in its own material again, its split included. */
	RemoveEntityStyle(entity: number): void
	/**
	 * Takes the style off every entity. A style outlives the script that set it, so a script clears
	 * what its previous load left on before it claims style ids of its own.
	 */
	RemoveEntityStyles(): void
	/**
	 * Draws every lag compensation pose in `slot`, 0 to 3, in style `style`, tinted per pass; a
	 * negative style stops the slot drawing.
	 */
	SetLagPoseStyle(slot: number, style: number, visibleColor: number, invisibleColor: number): void
	/** Outlines the entity whose custom id is `entity` in `color`; a color with alpha 0 removes it. */
	SetEntityGlow(entity: number, color: number): void
}
/** The game's chams: the one {@link CChams}. */
declare const ChamsSDK: CChams
