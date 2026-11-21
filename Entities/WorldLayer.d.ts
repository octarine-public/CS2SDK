// AUTO-GENERATED - do not edit.
/** A named layer of the map's world that the server shows or hides (`CInfoWorldLayer`). */
declare class WorldLayer extends Entity {
	/** Name of the world the layer belongs to. */
	public WorldName: string
	/** The layer's name, the one `WorldLayerVisibilityChanged` carries. */
	public LayerName: string
	/** Whether the layer is shown. A change fires `WorldLayerVisibilityChanged`. */
	public WorldLayerVisible: boolean
	/** Whether the layer's entities have been spawned. */
	public EntitiesSpawned: boolean
}
