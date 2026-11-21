// AUTO-GENERATED - do not edit.
/**
 * The events of `Events` the games share: frames, entity updates, the server's messages and
 * string tables, world layers and tasks. A key is the name a listener subscribes under, its tuple
 * the arguments the listener is called with.
 */
interface EventsMap {
	/**
	 * A frame's draw pass, at most one per rendered frame, after `WorldDraw`, `Draw2D` when it is
	 * due and `PreDraw`. The entities' visual positions, the viewport and
	 * `InputManager.CursorOnScreen` are this frame's, and `GameState.IsInDraw` is true.
	 */
	Draw: []
	/** Every draw pass, right before `Draw`, with the same frame state. */
	PreDraw: []
	/**
	 * A draw pass at the server's tick rate rather than the frame rate, on a frame that is not
	 * carrying a server tick, just before `PreDraw`. What an overlay draws here stays on screen
	 * until its next pass: a reading that only changes with the game state costs a tick's worth
	 * of work instead of a frame's, and none of it lands on the frames a tick already makes slow.
	 */
	Draw2D: []
	/**
	 * An entity update from the server begins: no entity of it has been created, changed or
	 * destroyed yet. `PostDataUpdate` ends it.
	 */
	PreDataUpdate: []
	/**
	 * An entity update from the server is applied, its `EntityCreated`, `EntityDestroyed` and
	 * `EntityVisibleChanged` all fired. `dt` is how far the latest server tick since the previous
	 * update moved the game clock, in seconds; 0 when none moved it or `LocalPlayer` is unset.
	 */
	PostDataUpdate: [dt: number]
	/**
	 * `LocalPlayer` was created: the entity at the player slot `ServerInfo` named. It fires while
	 * the update that creates it is still being applied.
	 */
	GameStarted: []
	/**
	 * `LocalPlayer` was destroyed, by the server or by a new connection, which destroys every
	 * entity. It reads `undefined` by the time this fires.
	 */
	GameEnded: []
	/**
	 * The server described itself: on connecting, and again each time the scripts start with the
	 * last description received, an empty one when there was none. `map` is that
	 * `CSVCMsg_ServerInfo` decoded.
	 */
	ServerInfo: [map: RecursiveProtobuf]
	/**
	 * A tick message from the server, `CNETMsg_Tick`: `tick` is the server tick, the rest its
	 * other fields in order, 0 or `""` where the message has none.
	 */
	ServerTick: [
		tick: number,
		hostComputationTime: number,
		hostFrameTimeStdDeviation: number,
		hostComputationTimeStdDeviation: number,
		legacyHostLoss: number,
		hostUnfilteredFrameTime: number,
		hltvReplayFlags: number,
		expectedLongTick: number,
		expectedLongTickReason: string,
		hostFrameDroppedPctX10: number,
		hostFrameIrregularArrivalPctX10: number
	]
	/**
	 * Dota 2 only: whether one of the game's panels, such as the chat, holds the input. It fires
	 * each time one takes or releases it.
	 */
	InputCaptured: [isCaptured: boolean]
	/**
	 * `GameState.LocalTeam` took a new value. It follows the team of `LocalPlayer`; in Dota 2 an
	 * observer takes the team they coach or watch.
	 */
	LocalTeamChanged: []
	/**
	 * The files of the map `ServerInfo` named are read, its entity lumps among them. Fires during
	 * every `ServerInfo`, once `GameState.MapName` is set.
	 */
	MapDataLoaded: []
	/**
	 * `Source2SDK.Renderer.WindowSize` changed, before the draw events of the frame that brought
	 * the new size. It also fires when the user changes the menu scale.
	 */
	WindowSizeChanged: []
	/**
	 * Every string table was dropped: the game cleared them, or the scripts start and every table
	 * is about to arrive again through `UpdateStringTable`.
	 */
	RemoveAllStringTables: []
	/**
	 * Entries of the string table `name` arrived: `update` maps each entry's index to its string
	 * and its data bytes. As the scripts start, every table arrives whole this way.
	 */
	UpdateStringTable: [name: string, update: Map<number, [string, ArrayBuffer]>]
	/**
	 * The map layer `layerName` was shown (`state` true) or hidden: on `PostDataUpdate` when a
	 * `WorldLayer`'s `WorldLayerVisible` changed, when a shown layer's entity is destroyed, and for
	 * `world_layer_base`, shown after `MapDataLoaded` and hidden on a new connection.
	 */
	WorldLayerVisibilityChanged: [layerName: string, state: boolean]
	/**
	 * The shown map layers changed: once after the `WorldLayerVisibilityChanged` events of an
	 * entity update, and after `world_layer_base` is shown on `MapDataLoaded`. A layer hidden by
	 * its entity's destruction or by a new connection does not raise it.
	 */
	WorldLayersVisibilityChanged: []
	/**
	 * `TaskManager.Cancel` took a waiting task off the queue: `handleID` is its handle. The SDK
	 * cancels tasks of its own on every new connection.
	 */
	TaskCancelled: [handleID: bigint]
	/**
	 * A task of `TaskManager` has run, or thrown: `handleID` is its handle. The SDK runs work of
	 * its own there too, so not every handle is a script's.
	 */
	TaskReleased: [handleID: bigint]
}

/**
 * The emitter the SDK raises its events on: frames, key and mouse input, server ticks, entities
 * created and destroyed. `EventsMap` lists every event with the arguments its listeners get.
 */
declare const Events: EventEmitter<EventsMap>

/**
 * The events of `Events` for the connection, the client, Panorama, and key and mouse input. A key
 * is the name a listener subscribes under, its tuple the arguments the listener is called with.
 */
interface EventsMap {
	/**
	 * The frame's world-shape stage, right after the interpolated positions are applied and before
	 * `PreDraw`: what `WorldDraw` is given here is drawn with the camera of the frame on screen.
	 */
	WorldDraw: []
	/**
	 * A connection to a game server began, or the scripts started. Every entity is destroyed by
	 * the time it fires.
	 */
	NewConnection: []
	/** The client reported that the stored configs changed; the menu reads its config back in. */
	ConfigsChanged: []
	/**
	 * The game's Panorama UI changed: in Deadlock and Dota 2 at most once a frame, after a panel
	 * was created or destroyed or, in Dota 2, the game's UI state changed. It also fires once as
	 * the scripts start, in CS2 only then.
	 */
	PanoramaFrame: []
	/**
	 * A Panorama window came up: `windowName` is the name `Source2SDK.Panorama.Root` takes for it.
	 * In CS2 a window is a top-level panel, and it comes up when the panel is shown.
	 */
	PanoramaWindowCreate: [windowName: string]
	/** The Panorama window `windowName` went away; in CS2, its top-level panel was hidden. */
	PanoramaWindowDestroy: [windowName: string]
	/**
	 * A new build of the scripts reached the host while these run. These keep running until the
	 * scripts are reloaded.
	 */
	ScriptsUpdated: []
	/** The client's language, each time the client sends it and once as the scripts start. */
	SetLanguage: [language: MenuLanguageID]
	/**
	 * A key went down in the game window: `keyMask` is its virtual-key code, below 256, and
	 * `InputManager.IsKeyDown` is true for it until it comes up. An `on` listener returning `false`
	 * keeps the key from the game.
	 */
	KeyDown: [keyMask: VKeys]
	/**
	 * A key came up: `keyMask` is its virtual-key code. An `on` listener returning `false` keeps it
	 * from the game, unless the game saw the key go down.
	 */
	KeyUp: [keyMask: VKeys]
	/**
	 * A character was typed in the game window: `char` is it, as one UTF-16 unit. An `on` listener
	 * returning `false` keeps it from the game.
	 */
	CharInput: [char: string]
	/**
	 * A mouse button went down, a double click included: `key` is the button. An `on` listener
	 * returning `false` keeps the click from the game.
	 */
	MouseKeyDown: [key: VMouseKeys]
	/**
	 * A mouse button came up: `key` is the button. An `on` listener returning `false` keeps it from
	 * the game, unless the game saw the button go down.
	 */
	MouseKeyUp: [key: VMouseKeys]
	/**
	 * The mouse wheel turned: `up` is true for a turn up, a positive wheel delta. An `on` listener
	 * returning `false` keeps it from the game.
	 */
	MouseWheel: [up: boolean]
}

/**
 * The events the host fires into `Source2SDK.NativeEvents`, with the arguments as the host passes
 * them. The SDK makes most of the events of `Events` out of these.
 */
interface NativeEventsMap {
	/**
	 * The client reported that the stored configs changed. `ConfigsChanged` of `Events` follows
	 * every listener here.
	 */
	ConfigsChanged: []
	/**
	 * The game's Panorama UI changed: in Deadlock and Dota 2 at most once a frame, after a panel
	 * was created or destroyed or, in Dota 2, the game's UI state changed; and in every game once
	 * as the scripts start. `PanoramaFrame` of `Events` follows every listener here.
	 */
	PanoramaFrame: []
	/**
	 * A Panorama window came up: `windowName` is the name `Source2SDK.Panorama.Root` takes for it.
	 * In CS2 a window is a top-level panel, and it comes up when the panel is shown.
	 * `PanoramaWindowCreate` of `Events` follows every listener here.
	 */
	PanoramaWindowCreate: [windowName: string]
	/**
	 * The Panorama window `windowName` went away. `PanoramaWindowDestroy` of `Events` follows
	 * every listener here.
	 */
	PanoramaWindowDestroy: [windowName: string]
	/** A custom game event from the server: `eventName` names it, `data` holds its fields. */
	CustomGameEvent: [eventName: string, data: RecursiveMap]
	/**
	 * Raised only when a recorded Dota 2 game is replayed, never in the game itself: one per
	 * recorded unit order. `isUserInput` is whether the user gave it, `wasCancelled` whether the
	 * scripts cancelled it then.
	 */
	DebuggerPrepareUnitOrders: [isUserInput: boolean, wasCancelled: boolean]
	/** onScreen: the uint32 entity indices of the units on screen, undefined from a core that does not list them */
	Draw: [
		visualData: ArrayBuffer,
		w: number,
		h: number,
		x: number,
		y: number,
		onScreen?: ArrayBuffer
	]
	/**
	 * The client is about to answer the Game Coordinator's ping. An `on` listener returning
	 * `false` keeps the answer from being sent. In Dota 2 it also fires before two natives of the
	 * host send the Game Coordinator a message, and `false` stops those as well.
	 */
	GCPingResponse: []
	/**
	 * A game event from the server: `eventName` names it, and `obj` holds its fields by name plus
	 * `server_tick`. `GameEvent` of `Events` follows with the same arguments on the next run of
	 * `TaskManager`.
	 */
	GameEvent: [eventName: string, obj: unknown]
	/**
	 * Dota 2 only: one of the game's panels took (`true`) or released (`false`) the input. More
	 * than one can hold it at once.
	 */
	InputCaptured: [isCaptured: boolean]
	/**
	 * A connection to a game server began, or the scripts started. The SDK destroys every entity
	 * first, and `NewConnection` of `Events` follows every listener here.
	 */
	NewConnection: []
	/**
	 * Dota 2 only: the user gave a unit order, which the SDK reads and raises as
	 * `PrepareUnitOrders` of `Events`. An `on` listener returning `false` keeps the order from the
	 * game. With `taken` the game was already kept from sending it (`SetUserOrdersTaken`): the
	 * order is the listeners' to give and what they return goes nowhere.
	 */
	PrepareUnitOrders: [taken: boolean]
	/**
	 * A new build of the scripts reached the host while these run. `ScriptsUpdated` of `Events`
	 * follows every listener here.
	 */
	ScriptsUpdated: []
	/**
	 * A message from the server that the host passes on, which is not every one: `msgID` is its
	 * id, `buf` its bytes. Most hold the message's protobuf; entity (55) and string-table (45)
	 * updates come in the host's own encoding. Some are sent again as the scripts start.
	 */
	ServerMessage: [msgID: number, buf: ArrayBuffer]
	/**
	 * The client's language, each time the client sends it and once as the scripts start.
	 * `SetLanguage` of `Events` follows every listener here.
	 */
	SetLanguage: [language: MenuLanguageID]
	/**
	 * Deadlock and Dota 2: an object the Game Coordinator keeps for the account, such as a lobby
	 * or a party, arrived or changed. `typeID` is its type, `msg` its protobuf bytes, `reason` 0
	 * for an object new to the client and 1 for a change; Dota 2 passes on any other value the
	 * game gives, and sends every object it holds again as the scripts start.
	 */
	SharedObjectChanged: [typeID: number, reason: number, msg: ArrayBuffer]
	/**
	 * A key, character, mouse-button or wheel message of the game window: `messageType` is its
	 * `WM_*` code, `wParam` and `lParam` its parameters, `x` and `y` the cursor in screen pixels.
	 * An `on` listener returning `false` keeps it from the game, unless it releases a key or a
	 * button the game saw go down.
	 */
	WndProc: [messageType: number, wParam: bigint, lParam: bigint, x: number, y: number]
}

/**
 * The events the SDK raises on `Events` in Counter-Strike 2. Each name maps to the arguments its
 * listeners are called with.
 */
interface EventsMap {
	/**
	 * The game event `bullet_impact`: a bullet landed. `event` has who fired it and where it hit.
	 */
	BulletImpact: [event: BulletImpactEvent]
	/**
	 * A player's chat line arrived from the server. `message` has the text, the sender and whether
	 * it went to everyone.
	 */
	ChatMessage: [message: ChatMessage]
	/**
	 * Every frame, as the last of its draw events: `WorldDraw`, `Draw2D` on the frames it is due
	 * and `PreDraw` come first. Entities' visual positions and the viewport size are this frame's
	 * by then.
	 */
	Draw: []
	/** Emitted on every `ServerInfo`, right after `MapDataLoaded`. */
	EntityAbilityDataUpdated: []
	/**
	 * A new entity arrived from the server. Emitted once the whole update that brought it is
	 * applied, so the other entities of that update exist too.
	 */
	EntityCreated: [ent: Entity]
	/**
	 * The server deleted an entity, or a new connection dropped them all. `ent.IsValid` is already
	 * false and `EntityManager.AllEntities` no longer lists it.
	 */
	EntityDestroyed: [ent: Entity]
	/**
	 * The game event `entity_killed`. `event` names the killed entity, the attacker and what dealt
	 * the damage. A killed entity that read alive already has `HP` 0 and `LifeState` `LIFE_DEAD`.
	 */
	EntityKilled: [event: EntityKilledEvent]
	/**
	 * An entity's `Team` changed. Also emitted for a pawn whose controller changed and for the
	 * local player once it is known. It can come before the entity's `PreEntityCreated`, while
	 * `ent.IsValid` is still false.
	 */
	EntityTeamChanged: [ent: Entity]
	/**
	 * An entity went dormant or came back: `entity.IsVisible` holds the new state. Also emitted
	 * for every new entity right after its `EntityCreated`, and not when one is destroyed.
	 */
	EntityVisibleChanged: [entity: Entity]
	/** The local player's entity was destroyed: `LocalPlayer` is `undefined` from here on. */
	GameEnded: []
	/**
	 * A game event arrived. `event_name` is its name, such as `player_hurt`, and `obj` its fields
	 * by name plus `server_tick`. Emitted on the next pass of the task queue after the host
	 * reports it. `PlayerHurt`, `PlayerDeath` and the other typed game events are emitted from
	 * this one.
	 */
	GameEvent: [event_name: string, obj: any]
	/** The local player's entity was created: `LocalPlayer` is set from here on. */
	GameStarted: []
	/**
	 * An entity's `LifeState` changed: the server sent a new one, an `EntityKilled` named an entity
	 * that read alive, or a `PlayerSpawn` named a pawn that did not. Also emitted with a `Player`
	 * whose `IsAlive` changed.
	 */
	LifeStateChanged: [ent: Entity]
	/** The local player's team changed: `GameState.LocalTeam` already holds the new one. */
	LocalTeamChanged: []
	/**
	 * Emitted on every `ServerInfo`, once the SDK has read the entity data of the map it names.
	 * `GameState.MapName` is that map by then.
	 */
	MapDataLoaded: []
	/**
	 * The menu wrote its config. `obj` is the document written: read it, do not change it, the
	 * next write reuses its branches.
	 */
	MenuConfigChanged: [obj: { [key: string]: any }]
	/**
	 * The game rules' minimap bounds changed: `bounds` is the mins and the maxs. One event for
	 * each of the two that changed.
	 */
	MinimapSizeChanged: [bounds: Vector3[]]
	/** The server had the client create a particle effect: `particle` is the SDK's record of it. */
	ParticleCreated: [particle: NetworkedParticle]
	/**
	 * The SDK dropped `particle` from `NetworkedParticle.Instances`: the server destroyed it, a
	 * released one reached its `EndTime` or has none, the entity it was attached to was destroyed,
	 * or a new connection began.
	 */
	ParticleDestroyed: [particle: NetworkedParticle]
	/**
	 * The server let a particle play out and its `EndTime` is known: `particle.Released` is set and
	 * `ParticleDestroyed` follows once that time has passed.
	 */
	ParticleReleased: [particle: NetworkedParticle]
	/**
	 * A particle message reported where an entity is: `ent.PredictedPosition` holds it. `particle`
	 * is the particle the message was for, `undefined` when the SDK tracks none under its index.
	 */
	ParticleUnitPositionUpdated: [ent: Nullable<Entity>, particle: Nullable<NetworkedParticle>]
	/**
	 * The server sent a message about a tracked particle that may have changed a control point,
	 * its draw or frozen state, its text or a texture attribute. Also emitted after the
	 * `EntityCreated` of an entity the particle names, and when an entity one of its control
	 * points follows is destroyed.
	 */
	ParticleUpdated: [particle: NetworkedParticle]
	/**
	 * The game event `player_death`: a player died. `event` names the victim, the killer and the
	 * assister, and says how the kill was made.
	 */
	PlayerDeath: [event: PlayerDeathEvent]
	/**
	 * The game event `player_hurt`: a player took damage. `event` names the victim and the
	 * attacker, and has the damage, what it left and where it landed.
	 */
	PlayerHurt: [event: PlayerHurtEvent]
	/**
	 * The game event `player_sound`: a player made a sound the game reports, a footstep among
	 * them. `event` has the player, how far the sound carries and how long it lasts.
	 */
	PlayerSound: [event: PlayerSoundEvent]
	/** The game event `player_spawn`: a player spawned. `event` has the pawn and the player. */
	PlayerSpawn: [event: PlayerSpawnEvent]
	/**
	 * An entity update from the server has been applied and its entity events emitted. `dt` is the
	 * game time in seconds the last server tick added: 0 when no tick has moved game time since
	 * the previous `PostDataUpdate`, or there is no local player.
	 */
	PostDataUpdate: [dt: number]
	/** An entity update from the server is about to be applied: no entity has changed yet. */
	PreDataUpdate: []
	/** Every frame, right before `Draw`. */
	PreDraw: []
	/**
	 * A new entity has its first fields, while the update that brought it is still being read:
	 * entities that update creates after it do not exist yet. `EntityCreated` follows once the
	 * update is applied.
	 */
	PreEntityCreated: [ent: Entity]
	/** The server dropped every string table. `StringTables` empties itself on this event. */
	RemoveAllStringTables: []
	/**
	 * The server's info message arrived. `map` is the message, read by field name:
	 * `map.get("map_name")`.
	 */
	ServerInfo: [map: RecursiveProtobuf]
	/**
	 * The server's tick message arrived. `tick` is the server tick, which
	 * `GameState.CurrentServerTick` holds from here on; the other arguments are the message's
	 * fields of the same names, 0 or `""` where it has none.
	 */
	ServerTick: [tick: number, host_computationtime: number, host_frametime_std_deviation: number, host_computationtime_std_deviation: number, legacy_host_loss: number, host_unfiltered_frametime: number, hltv_replay_flags: number, expected_long_tick: number, expected_long_tick_reason: string, host_frame_dropped_pct_x10: number, host_frame_irregular_arrival_pct_x10: number]
	/**
	 * The server started a sound event whose name the SDK resolved. `source_ent` is the entity it
	 * plays from, `undefined` when the client has none at the index sent. `position` is (0, 0, 0),
	 * `seed` 0 and `start_time` -1 where the message carries none.
	 */
	StartSound: [name: string, source_ent: Nullable<Entity>, position: Vector3, seed: number, start_time: number]
	/** `TaskManager.Cancel` took a waiting task off the queue. `handleID` is the task's handle. */
	TaskCancelled: [handleID: bigint]
	/**
	 * A task of `TaskManager` has run, one that threw included. `handleID` is the task's handle.
	 */
	TaskReleased: [handleID: bigint]
	/**
	 * The server sent entries of a string table. `name` is the table, `update` the entries sent by
	 * index, each its string and its data bytes. `StringTables` takes them in on this event.
	 */
	UpdateStringTable: [name: string, update: Map<number, [string, ArrayBuffer]>]
	/** The game event `vote_cast`: a player voted. `event` has the player and the option chosen. */
	VoteCast: [event: VoteCastEvent]
	/**
	 * The game event `weapon_fire`: a player fired. `event` has the shooter, the weapon and whether
	 * it is silenced.
	 */
	WeaponFire: [event: WeaponFireEvent]
	/**
	 * The viewport size changed, `Source2SDK.Renderer.WindowSize` already the new one. Also
	 * emitted when the menu scale is set, by the user or a loaded config, once a frame has
	 * reported the viewport.
	 */
	WindowSizeChanged: []
	/**
	 * Closes a batch of `WorldLayerVisibilityChanged`: emitted once after the base layer is shown
	 * on `MapDataLoaded`, and once per `PostDataUpdate` in which any layer changed. A layer hidden
	 * by a new connection or with its entity gets none.
	 */
	WorldLayersVisibilityChanged: []
	/**
	 * A world layer was shown or hidden: `layerName` is its name, `state` whether it is visible
	 * now. `world_layer_base` is shown on every `MapDataLoaded` and hidden on a new connection.
	 */
	WorldLayerVisibilityChanged: [layerName: string, state: boolean]
}

/**
 * The host's own events in Counter-Strike 2, raised on `Source2SDK.NativeEvents`. Each name maps
 * to the arguments the host passes.
 */
interface NativeEventsMap {
	/**
	 * One of the changer's items was equipped or unequipped for a team, through
	 * `InventorySDK.EquipItem` or the game's loadout screen. `itemId` is the item's id;
	 * `equippedT` and `equippedCt` say which teams have it equipped now.
	 */
	ItemEquipped: [itemId: number, equippedT: boolean, equippedCt: boolean]
	/** An injected container's unboxing, kept from the GC for the script to answer; keyId 0 without a key */
	OpenCrate: [
		caseId: number,
		keyId: number,
		pointsRemaining: number,
		volatileLimit: number,
		forRental: boolean
	]
	/**
	 * The game asked what a casket holds, and the casket is one of the changer's items. The
	 * request is kept from the game coordinator for the script to answer. `casketId` is the
	 * item's id.
	 */
	CasketLoadContents: [casketId: number]
	/**
	 * The game started a store purchase whose first line names one of the changer's items. It is
	 * kept from the store for the script to complete. `defIndex` is the definition index bought,
	 * `itemId` the item's id.
	 */
	StorePurchase: [defIndex: number, itemId: number]
	/**
	 * The game built a user command and holds it for an answer. Raised only while `UserCmdManager`
	 * asks for it, as it does with a handler or listener enabled, and `UserCmdManager` answers.
	 * `bytes` is the command; the six numbers are the shoot position and view angles of its last
	 * input sample, NaN when the host has none; `manualButtons` is 1 for a held primary attack
	 * plus 2048 for a held secondary one.
	 */
	RequestUserCMDAction: [bytes: ArrayBuffer, posX: number, posY: number, posZ: number, angleX: number, angleY: number, angleZ: number, manualButtons: number]
	/** The host's cue to run the task queue: the SDK calls `TaskManager.Tick()` on it. */
	UpdateTaskManager: []
	/**
	 * The game's UI changed state; also raised once after every script load, with the current
	 * state. `menuState` is 1 for the loading screen, 2 in game and 3 for the dashboard. The SDK
	 * keeps `GameState.IsEscapeMenuOpen` true while it is not 2.
	 */
	UIStateChanged: [menuState: number]
}
