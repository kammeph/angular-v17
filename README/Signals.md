# Angular Signals

[&larr; Control Flow](./ControlFlow.md)

A signal is a wrapper around a value that notifies interested when that value changes. Signals can contain either primitive values or complex data structures.

The advantage is mostly related to the way Angular handles change detection.

With Zone.js, when you trigger the inc() method, Angular will look down the entire component tree for changes, even if just that one thing has changed.

With signals, we indicate specifically that only a particular thing has changed and needs to be updated.

[Signals Docs](https://angular.dev/guide/signals)
[RxJS Interop (developer preview)](https://angular.dev/guide/signals/rxjs-interop)

[&larr; Control Flow](./ControlFlow.md)
