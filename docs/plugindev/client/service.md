---
title: Service
---

[**`NFive.SDK.Client.Services.Service`**](/api/client/NFive.SDK.Client.Services.Service.html)

A service is the main entrypoint for client plugins. The FiveM client [starts the services](lifecycle.md) on connection to the server and they exist for the duration of the client connection.

Plugins should contain one or more classes which inherit from `Service` in one of their [`main`](plugindev/definition.md#client) assemblies.

## Constructor

```csharp
Service(ILogger logger, ITickManager ticks, IEventManager events, IRpcHandler rpc, ICommandManager commands, OverlayManager overlayManager, User user)
```

For convenience the logger, events, RPC and command manager, overlay manager and connected user types are stored to local properties for easy access.

## Methods

<AUTOGENERATED_TABLE_OF_CONTENTS>

### `Loaded()`

```csharp
public virtual Task Loaded()
```

Run immediately after the plugin's constructor is called, provided for continence so that asynchronous code can be used during construction. NFive client will block and wait for this method to complete before loading the next plugin.

---

### `Started()`

```csharp
public virtual Task Started()
```

Run asynchronously at the same time for all plugins after they have all been loaded. This method is where all plugin startup logic should be ran.

---

### `HoldFocus()`

```csharp
public virtual Task HoldFocus()
```

---

### `Delay()`

```csharp
protected async Task Delay(int ms)
protected async Task Delay(TimeSpan delay)
```