---
name: octarine-orders
description: Use when making the player act in Counter-Strike 2 (console commands, movement, buttons).
---

# Acting in Counter-Strike 2

- Console commands: `GameState.ExecuteCommand("…")` sends one to the server,
  `GameState.ExecuteClientCommand("…")` runs it in the local console; both only while `GameState.IsConnected`.
  Rate-limit anything a key repeats.
- Movement and buttons go through `UserCmdManager.AddHandler("<package>.<what>", ({ command }) => …)`: the
  name is unique to the handler, and its `Enabled` switches it (a handler starts off); keep it off unless its
  key is held. Search `UserCmdManager` in `@@sdkDir@@`.
- The local pawn is `LocalPlayer?.PlayerPawn`; the other players' pawns are `PlayerPawns` or
  `EntityManager.GetEntitiesByClass(PlayerPawn)`.
