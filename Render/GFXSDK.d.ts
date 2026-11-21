// AUTO-GENERATED - do not edit.
/**
 * Offscreen 3D scenes the core renders models into, for previews drawn on the UI. A model is
 * loaded once per path and shared, each load being a claim one {@link DestroyModel} gives back.
 * Use the `GFXSDK` instance.
 * @example
 * const scene = GFXSDK.CreateScene(512, 512)
 * const model = await GFXSDK.LoadModel("weapons/models/ak47/weapon_rif_ak47.vmdl")
 * if (model !== undefined) {
 * 	scene.CreateInstance(model)
 * }
 */
interface CGFX {
	/** A light that shines one way across the whole scene, as a light's `type`. */
	get LightDirectional(): number
	/** A light that shines from one point, as a light's `type`. */
	get LightPoint(): number
	/** Makes a scene `width` by `height` px. */
	CreateScene(width: number, height: number): GFXScene
	/** Destroys the scene; nothing may call through it again. */
	DestroyScene(scene: GFXScene): void
	/**
	 * Lets a kept picture go now; nothing may call through it again. On a host built before it the
	 * collector lets it go when it reaches the picture.
	 */
	DestroyImage(image: GFXImage): void
	/**
	 * Loads the model at `path`, or answers the one already loaded from it, as a claim on it; null
	 * when there is no model at `path`.
	 */
	LoadModel(path: string): Promise<Nullable<GFXModel>>
	/**
	 * Gives back one {@link LoadModel}'s claim on the model; the last one lets it go once no
	 * instance stands on it. Match each load with exactly one of these.
	 */
	DestroyModel(model: GFXModel): void
	/**
	 * With `true`, a weapon finish is composited by the game's own compositor and drawn with its
	 * weapon shader; off by default.
	 */
	SetNativeWeaponFinish(enabled: boolean): void
}
/** The core's offscreen scenes: the one {@link CGFX}. */
declare const GFXSDK: CGFX
