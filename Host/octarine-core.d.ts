// AUTO-GENERATED - do not edit.
/**
 * A model loaded for a scene: its skeleton, meshes with their materials, animations and
 * attachments. `GFXSDK.LoadModel` hands it out, and one model serves any number of instances.
 */
interface GFXModel {
	/**
	 * Whether the model's meshes, bones and animations are loaded. A model that is not reads as
	 * an empty one.
	 */
	IsLoaded(): boolean
	/**
	 * Which shaders this model draws with: 0 picks automatically, 1 the replica programs, 2 the game's
	 * own shaders. Per model, so two panes can show one model both ways at once. Applied on the
	 * render thread; returns the model.
	 */
	SetShaderMode(mode: 0 | 1 | 2): GFXModel
	/**
	 * Which shaders the model draws with, numbered as {@link SetShaderMode} takes them; 0 until
	 * one is set. A mode just set shows here from the next frame.
	 */
	GetShaderMode(): 0 | 1 | 2
	/**
	 * Index of the bone called `name`, or -1 when the model has none. The name has to match
	 * exactly, letter case included.
	 */
	GetBoneIdx(name: string): number
	/** How many bones the skeleton has; 0 until the model is loaded. */
	GetBoneCount(): number
	/** What the bone at `index` is called; `undefined` when `index` is out of range. */
	GetBoneName(index: number): string
	/**
	 * Index of the bone the one at `index` hangs on, negative for a root bone; `undefined` when
	 * `index` is out of range.
	 */
	GetBoneParent(index: number): number
	/**
	 * How many meshes the model draws; 0 until it is loaded. A mesh is split into submeshes, each
	 * drawn with a material of its own.
	 */
	GetMeshCount(): number
	/** How many submeshes the mesh at `meshIndex` has; `undefined` when it is out of range. */
	GetSubmeshCount(meshIndex: number): number
	/**
	 * Path of the material the model itself gives a submesh, whatever an instance has put over
	 * it; `undefined` when either index is out of range.
	 */
	GetSubmeshMaterial(meshIndex: number, submeshIndex: number): string
	/**
	 * The mesh groups the mesh at `meshIndex` belongs to, as a mask: bit `g` stands for the group
	 * {@link GFXInstance.GetGroupName} names at `g`. `undefined` when `meshIndex` is out of range.
	 */
	GetMeshGroupMask(meshIndex: number): number
	/**
	 * How many animations the model ships with. Clips loaded with {@link LoadAGClip} are not
	 * among them.
	 */
	GetAnimationCount(): number
	/**
	 * What the model's own animation at `index` is called, which is the name
	 * {@link GFXInstance.PlayAnimation} plays it by; `undefined` when `index` is out of range.
	 */
	GetAnimationName(index: number): string
	/**
	 * How long the model's own animation at `index` runs, in seconds; 0 for one with no frame
	 * rate, `undefined` when `index` is out of range.
	 */
	GetAnimationDuration(index: number): number
	/**
	 * The lowest corner of the model's bind pose bounds as `[x, y, z]`, in the model's space. The
	 * bounds cover every mesh, those of hidden mesh groups included.
	 */
	GetBoundsMin(): number[]
	/** The highest corner of the bounds {@link GetBoundsMin} starts, as `[x, y, z]`. */
	GetBoundsMax(): number[]
	/** How many attachments the model has: named points that ride its bones. */
	GetAttachmentCount(): number
	/** What the attachment at `index` is called; `undefined` when `index` is out of range. */
	GetAttachmentName(index: number): string
	/**
	 * Index of the bone the attachment at `index` rides, or -1 when it rides none; `undefined`
	 * when `index` is out of range.
	 */
	GetAttachmentBone(index: number): number
	/**
	 * Where the attachment at `index` sits in the space of the bone it rides, as `[x, y, z]`;
	 * `undefined` when `index` is out of range.
	 */
	GetAttachmentOffset(index: number): number[]
	/**
	 * How the attachment at `index` is turned in the space of the bone it rides, as a quaternion
	 * `[x, y, z, w]`; `undefined` when `index` is out of range.
	 */
	GetAttachmentRotation(index: number): number[]
	/**
	 * Loads the animation clip file at `path` onto the model, for
	 * {@link GFXInstance.PlayAnimation} to play by `name`: the file's name without folder and
	 * extension unless given. Resolves `false` when the file does not load or the model is not
	 * loaded. A clip already loaded under that name resolves `true` without loading again.
	 */
	LoadAGClip(path: string, name?: string): Promise<boolean>
}
/**
 * An offscreen 3D scene: instances of models, lights and a camera, drawn each frame into a picture
 * the UI shows by {@link GFXScene.GetTextureId}. `GFXSDK.CreateScene` makes it.
 */
interface GFXScene {
	/**
	 * Adds an instance to the scene, bound to `model` when one is given. Without a model it draws
	 * nothing until {@link GFXInstance.SetModel} binds one.
	 */
	CreateInstance(model?: GFXModel): GFXInstance
	/**
	 * Adds a light. `type` is `GFXSDK.LightDirectional` or `GFXSDK.LightPoint`: a directional light
	 * shines from the direction of `position`, whose length does not matter, and a point light
	 * stands at `position`. A material not drawn with the game's own shaders is lit by the first
	 * 4 lights alone, see {@link GFXModel.SetShaderMode}.
	 *
	 * @param rotation not read
	 * @param color 0xRRGGBBAA, white when left out
	 * @param intensity brightness multiplier on the colour, not capped at 1. Left out or negative,
	 *        the colour's alpha over 255 is used instead, and an alpha of 0 counts as 1.
	 */
	AddLight(type: number, position: number[], rotation?: number[], color?: number, intensity?: number): void
	/**
	 * How many lights the scene holds, tube lights included. A light added or removed is counted
	 * from the next frame.
	 */
	GetLightCount(): number
	/**
	 * Replaces the light at `index` with one described as for {@link AddLight}. Ignored when the
	 * scene has no light at `index`.
	 */
	SetLight(index: number, type: number, position: number[], rotation?: number[], color?: number, intensity?: number): void
	/**
	 * Removes the light at `index`; the lights after it move down by one. Ignored when the scene
	 * has no light at `index`.
	 */
	RemoveLight(index: number): void
	/** Removes every light of the scene, tube lights included. */
	ClearLights(): void
	/**
	 * Whether the scene renders each frame; on by default. A scene that does not keeps its last
	 * picture, and its animations stand still.
	 */
	SetUpdating(updating: boolean): void
	/**
	 * Whether the ui draws nothing for this scene from a model being swapped or an instance being
	 * created until the scene next renders. On by default, so a pane showing one model never shows
	 * the one it replaced; a scene that keeps its picture whole through a swap turns it off, or it
	 * blanks for that frame instead.
	 */
	SetHoldOnSwap?(hold: boolean): void
	/** Whether the scene renders each frame, as {@link SetUpdating} last said. */
	IsUpdating(): boolean
	/**
	 * Which shader debug view the scene renders with, 0 being the shaded image. For shaders
	 * that carry debug views (the weapon preview's does: 1 NoPaint, 2 metalness, 3 roughness,
	 * 4 masks, 5 normals, 6 paint colour, 7 pattern, 8 paint blend); others ignore it.
	 */
	SetDebugView(view: number): void
	/** Resizes the scene's picture to `width` by `height` px. Ignored unless both are above 0. */
	SetSize(width: number, height: number): void
	/**
	 * Adds a tube light, the segment `a`..`b` thickened by `radius`: on a flat surface it leaves
	 * a highlight along its length where a point light leaves one spot.
	 *
	 * @param color 0xRRGGBBAA
	 * @param intensity brightness multiplier on the colour, 1 when left out
	 */
	AddTubeLight(a: number[], b: number[], radius: number, color: number, intensity?: number): void
	/**
	 * Replaces the light at `index` with a tube light described as for {@link AddTubeLight}.
	 * Ignored when the scene has no light at `index`.
	 */
	SetTubeLight(index: number, a: number[], b: number[], radius: number, color: number, intensity?: number): void
	/**
	 * Multisampling of the scene's picture, which smooths the edges of its models: 1 for none, the
	 * default, or 2, 4, 8 or 16 samples a pixel. Any other number is ignored.
	 */
	SetSamples(samples: number): void
	/**
	 * Sets the room the scene's materials reflect and how bright it reads.
	 *
	 * @param name `"warehouse"` for the game's inspect room or `"studio"` for a studio, both built
	 *        in; the path of a cubemap array in the game's files under its compiled name, such as
	 *        `"maps/warehouse_vanity/cubemaps/env_cubemap_array.vtex_c"`; or `""`, `"none"` or
	 *        `"default"` to leave each material the room it has by default, which a path that does
	 *        not load does too
	 * @param exposure brightness multiplier on the room, 1 when left out
	 * @param probe which room of a cubemap array to take, 0 when left out; the two built-in rooms
	 *        do not read it
	 */
	SetEnvironment(name: string, exposure?: number, probe?: number): void
	/**
	 * The pane's display transform, in the linear-with-a-knee convention the character panes
	 * use. `desat` is how much of the highlight rolloff runs per channel: 0 keeps a bright
	 * highlight's hue, 1 clips it toward white. `shoulder` pulls the bend earlier.
	 */
	SetDisplay(exposure: number, desat?: number, shoulder?: number): void
	/**
	 * With `on` above 0.5, the picture goes through the game's own display transform in place of
	 * the knee {@link SetDisplay} sets; the exposure set there still applies.
	 */
	SetGameTonemap(on: number): void
	/**
	 * How much of the environment's blurred top mip stands in for irradiance on the diffuse.
	 * Keeps the diffuse answering to the same room as the specular instead of to a constant.
	 */
	SetAmbientFromEnv(scale: number): void
	/**
	 * How strongly the finish colour tints the reflections on it once more, from 0 to 1. 0, the
	 * default, matches the game.
	 */
	SetSpecPaintTint(amount: number): void
	/**
	 * How much of the room's own colour the diffuse ambient carries: 1 keeps it, 0 keeps only
	 * its brightness. The game's warehouse probe is warm, and at full saturation it tints every
	 * matte surface the game itself renders neutral.
	 */
	SetAmbientSaturation(sat: number): void
	/**
	 * Looks from `position` at `target` in perspective. `fov` is the vertical field of view in
	 * degrees, and `up` is `[0, 0, 1]` unless given. The view reaches from 1 to 8000 units ahead.
	 */
	SetCamera(position: number[], target: number[], fov: number, up?: number[]): void
	/**
	 * Looks from `position` at `target` without perspective. `size` is the height of the view in
	 * world units, its width following the picture's proportions; `up` is `[0, 0, 1]` unless
	 * given. The view reaches from 1 to 8000 units ahead.
	 */
	SetOrthoCamera(position: number[], target: number[], size: number, up?: number[]): void
	/**
	 * Drops the camera {@link SetCamera} or {@link SetOrthoCamera} set. The scene is seen again as
	 * before either was called: from `[140, 140, 70]` at `[0, 0, 40]`, with a field of view of 55
	 * degrees.
	 */
	ResetCamera(): void
	/**
	 * The id the UI shows the scene's picture by, as the image `octarine://scene/<id>`; -1 when
	 * the scene has none. Valid at once, and blank until the scene has rendered.
	 */
	GetTextureId(): number
	/**
	 * Keeps the scene's picture for the UI past the scene itself. The image shows under the scene's
	 * texture id, and what it shows is the last frame the scene drew before it was destroyed; the
	 * models it drew can be destroyed as well. A scene has one image, and asking again answers
	 * the same one. `undefined` for a scene with no texture id. Absent on an older host.
	 *
	 * @example
	 * const image = scene.KeepImage?.()
	 * GFXSDK.DestroyScene(scene)
	 * GFXSDK.DestroyModel(model)
	 */
	KeepImage?(): Nullable<GFXImage>
}
/** A scene's kept picture, see {@link GFXScene.KeepImage}. */
interface GFXImage {
	/** The UI texture id to draw it with, the same one its scene had. */
	GetTextureId(): number
	/**
	 * Whether the id has a picture to draw. It turns false when the picture is lost with the
	 * graphics device, which a resolution change resets: no scene is left to draw it again, so
	 * it has to be made anew. Absent on an older host.
	 */
	IsValid?(): boolean
}
/**
 * What a model's file declares about it: bone names, hitbox sets and bounds, as authored and not
 * as any entity poses it. `Entity.ModelData` holds the one of an entity's model once it has loaded.
 */
interface ModelData {
	/**
	 * The model's hitbox sets, one per set name. The whole list is built anew on every call, so
	 * keep the result instead of asking again.
	 */
	getHitboxSets(): ModelHitboxSet[]
	/**
	 * The names of the model's bones in bone order, so a name's place is the bone's index. Empty
	 * for a model with no meshes.
	 */
	getBoneNames(): string[]
	/**
	 * Writes the bounds of the model's meshes to the shared `IOBuffer`: the lowest corner at offset
	 * 0, the highest at offset 3, for `Vector3.fromIOBuffer(0)` and `Vector3.fromIOBuffer(3)`.
	 */
	getBounds(): void
}
/**
 * One placement of a model in a scene, with a pose, an animation, shown mesh groups and material
 * overrides of its own. {@link GFXScene.CreateInstance} makes it.
 */
interface GFXInstance {
	/**
	 * Binds a model onto the instance, or takes the one it holds off it when given nothing: the
	 * instance keeps its place in the scene with nothing to draw, and binding a model again brings
	 * it back. Taking it off is how an instance is put away, since a model carrying no mesh groups
	 * has every mesh of it visible and cannot be hidden by switching groups off.
	 */
	SetModel(model?: GFXModel): void
	/**
	 * Names the instance this one stands on. It takes effect once {@link SetAttachmentBone} picks
	 * a bone of `parent` or {@link SetBoneMerge} is on. To stand free again, turn the merge off
	 * and set the attachment bone to -1.
	 */
	SetParent(parent: GFXInstance): void
	/**
	 * The bone of the parent this instance rides, as its index in the parent's model; -1 for
	 * none. The instance is placed so that its own `wpn` bone, or its first root bone when it has
	 * none, sits on that bone, and its own transform is ignored while it rides.
	 */
	SetAttachmentBone(boneIndex: number): void
	/**
	 * With `true` the instance takes the pose of its parent's skeleton: each bone follows the
	 * parent's bone of the same name, letter case aside. For a model skinned to another's
	 * skeleton, such as gloves on arms. A merged instance stands where the parent does and
	 * ignores its attachment bone, its own transform and its own animation. A bone the parent
	 * has no match for keeps its bind position against its own parent bone. Does nothing
	 * without a parent from {@link SetParent}.
	 */
	SetBoneMerge(merge: boolean): void
	/**
	 * Scenery stands in the scene without the scene being fitted to it: the light probe volume and
	 * the shadow map cover the rest of what the scene holds, and scenery casts no shadow. For a sky
	 * dome or a distant backdrop, which would otherwise stretch both over its own extent.
	 */
	SetScenery(scenery: boolean): void
	/**
	 * Places an instance that stands free: `position` as `[x, y, z]`, `angles` as
	 * `[pitch, yaw, roll]` in degrees, and a uniform `scale` of 1 unless given. Ignored while the
	 * instance rides a parent's bone or is merged onto its skeleton.
	 */
	SetTransform(position: number[], angles: number[], scale?: number): void
	/**
	 * Plays a clip by name. It loops unless `loop` is false: then it plays once and holds its last
	 * frame, for a clip another hands over to once it has played out.
	 */
	PlayAnimation(name: string, loop?: boolean): void
	/** Stops the animation that is playing and puts the instance back in its bind pose. */
	Stop(): void
	/**
	 * How many mesh groups the bound model has: sets of meshes shown and hidden together. 0 while
	 * no loaded model is bound.
	 */
	GetGroupCount(): number
	/** What the mesh group at `index` is called; an empty string when there is none. */
	GetGroupName(index: number): string
	/**
	 * Whether the mesh group at `index` is shown. A mesh draws while any group it belongs to is
	 * shown, and a model with one group or none draws every mesh whatever this says.
	 */
	IsGroupVisible(index: number): boolean
	/**
	 * Shows or hides the mesh group at `index`; ignored when there is none. Binding another model
	 * puts the groups back to that model's own choice.
	 */
	SetGroupVisible(index: number, visible: boolean): void
	/**
	 * The bone's transform in the current pose, in the model's space: 16 numbers column by column,
	 * with the position at 12, 13 and 14. `undefined` when no loaded model is bound or `boneIndex`
	 * is out of range.
	 */
	GetBoneMatrix(boneIndex: number): Nullable<number[]>
	/**
	 * The bind pose bounds of what the visible mesh groups show, as [min, max] in model space.
	 * A model's own bounds cover every group, hidden ones included (an agent's first person arms),
	 * so this is what to centre a view on. Undefined when nothing is shown.
	 *
	 * Absent on a host built before it; fall back to the model's bounds.
	 */
	GetBounds?(): Nullable<number[][]>
	/**
	 * Replaces one submesh's material. Accepts a .vmat/.vcompmat path, an inline KV3 material
	 * definition string, or a MaterialDef from GFX.CreateMaterial.
	 *
	 * A weapon finish is composited against the inputs named by the material it replaces, so
	 * which submesh it lands on decides how it is built, not just where it goes.
	 */
	SetSubmeshMaterial(
		meshIndex: number,
		submeshIndex: number,
		material: string | GFXMaterialDef
	): void
	/**
	 * Takes off every material {@link SetSubmeshMaterial} put on, so each submesh draws the model's
	 * own again. Overlays and material parameters stay.
	 */
	ClearMaterialOverrides(): void

	/**
	 * Overrides one material parameter for this instance, applied at draw time as a uniform.
	 * Cheap enough to call every frame — unlike SetSubmeshMaterial it creates no material and
	 * shares nothing, so a colour that changes per entity per frame belongs here.
	 *
	 * A `submeshIndex` of -1 applies to every submesh of that mesh. Setting a parameter the
	 * bound shader does not declare is silently a no-op.
	 *
	 * @param value a number broadcasts to all four components, or pass [x,y,z,w]
	 */
	SetMaterialParam(
		meshIndex: number,
		submeshIndex: number,
		name: string,
		value: number | number[]
	): void
	/** drops the parameter overrides on one mesh, or on every mesh when no index is given */
	ClearMaterialParams(meshIndex?: number): void
	/**
	 * The instance tint the game's own shaders multiply into the model's colour, as 0xRRGGBBAA in
	 * sRGB. White (the default, and what an omitted argument sets) leaves the model as authored.
	 * Mints nothing, so it is safe to change every frame. Materials on the replica programs
	 * ignore it.
	 */
	SetTint(color?: number, secondary?: boolean): void
	/**
	 * Where this instance draws within a render pass, lowest first; equal orders keep the order the
	 * instances were created in. Materials that write no depth (fill chams) resolve by order alone.
	 */
	SetDrawOrder?(order: number): void
	/**
	 * Draws one material over every submesh, on top of what each wears: its own material or a
	 * {@link SetSubmeshMaterial} override. Called without `material` it takes the overlay off, and
	 * binding another model drops it. While one is on, the tint colours the overlay and what is
	 * kept under it draws untinted. Does nothing while no loaded model is bound.
	 *
	 * @param material what {@link SetSubmeshMaterial} takes
	 * @param secondary `true` addresses the second look's overlay, see {@link SetSubmeshLook}
	 */
	SetOverlayMaterial(material?: string | GFXMaterialDef, secondary?: boolean): void
	/**
	 * Whether a submesh under an overlay still draws what it wears beneath it. Off by default,
	 * when the overlay alone is drawn.
	 *
	 * @param secondary `true` addresses the second look's flag, see {@link SetSubmeshLook}
	 */
	SetKeepOriginal(keep: boolean, secondary?: boolean): void
	/**
	 * Which of two looks one submesh wears. The second is an overlay, keep flag and tint of its own,
	 * which SetOverlayMaterial, SetKeepOriginal and SetTint address with `secondary` - the bare arms
	 * around a glove, dressed apart from it. Kept across look changes, dropped when the model changes.
	 * Absent on a host built before it, which ignores `secondary` too: check for this first.
	 */
	SetSubmeshLook?(mesh: number, submesh: number, secondary: boolean): void
}
/** A named set of a model's hitboxes. An entity's hitboxes are placed from the first set. */
declare interface ModelHitboxSet {
	/** What the model calls the set. */
	name: string
	/**
	 * The hitboxes of the set. A hitbox's place in this list is the index
	 * `WorldHitbox.HitboxIndex` reports.
	 */
	hitboxes: ModelHitbox[]
}
/**
 * A material assembled in memory. The setters are BUILD TIME: each distinct set of values is a
 * distinct cached material, so a value that changes every frame does not belong here.
 */
interface GFXMaterialDef {
	/**
	 * Sets the vector parameter `name`, such as `g_vColorTint`, over the value the definition was
	 * made with, and answers the definition so that calls chain.
	 *
	 * @param value a number fills all four components; an array gives them as `[x, y, z, w]`, and
	 *        the ones it leaves out are 0
	 */
	SetVector(name: string, value: number | number[]): GFXMaterialDef
	/**
	 * Sets the number parameter `name`, such as `g_flOpacityScale`, over the value the definition
	 * was made with, and answers the definition so that calls chain.
	 */
	SetNumber(name: string, value: number): GFXMaterialDef
	/**
	 * Points the texture parameter `name` at the texture file at `path`, in place of the one the
	 * definition was made with, and answers the definition so that calls chain.
	 */
	SetTexture(name: string, path: string): GFXMaterialDef
	/** An independent copy, for building several variants out of one definition. */
	Clone(): GFXMaterialDef
	/**
	 * The key the material is cached under, for diagnostics: definitions that build the same
	 * material answer the same key.
	 */
	GetKey(): string
	/** The .vfx the definition names, such as `"csgo_effects.vfx"`. */
	GetShader(): string
}
/**
 * One hitbox of a model — the damage registration the game hit-tests against, not the physics
 * hull it collides with.
 */
declare interface ModelHitbox {
	/** What the model calls the hitbox. */
	name: string
	/**
	 * Name of the bone the hitbox rides, as the hitbox spells it. The skeleton may spell the same
	 * bone in another letter case, so look the bone up by {@link ModelHitbox.boneIndex}.
	 */
	boneName: string
	/** Index into the model's bones, or -1 when the model has no such bone. */
	boneIndex: number
	/** Which damage group a hit here lands in, and so which multiplier it takes. */
	groupId: number
	/** The shape of the hitbox: 0 a box, 1 a sphere, 2 a capsule, the values of `EHitboxShape`. */
	shapeType: 0 | 1 | 2
	/** Radius of a sphere or capsule; 0 for a box. */
	radius: number
	/** Whether the hitbox follows only the position of its bone, ignoring the bone's rotation. */
	translationOnly: boolean
	/**
	 * Extents in the bone's own space as `[x, y, z]` — carry these through the live bone
	 * transform.
	 */
	localMin: [number, number, number]
	/**
	 * The far end of the extents {@link ModelHitbox.localMin} starts, in the same space: the
	 * opposite corner of a box, the centre of a capsule's second cap. A sphere is centred on
	 * `localMin` and has no use for this.
	 */
	localMax: [number, number, number]
	/** Extents in the model's bind pose, as `[x, y, z]`. Not where the hitbox is right now. */
	min: [number, number, number]
	/**
	 * The upper corner of the bind pose extents {@link ModelHitbox.min} starts, as `[x, y, z]`.
	 * They are the box around the whole shape, a sphere's or capsule's radius included.
	 */
	max: [number, number, number]
}
