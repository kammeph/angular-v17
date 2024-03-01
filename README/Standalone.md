# Standalone Components, Directives and Pipes

[&larr; Back](../README.md) | [@Input Decorator &rarr;](./Input.md)

A standalone component is a component that does not need to be declared in a NgModule. Existing applications can adopt the new standalone style without any breaking changes.

Benefits:

1. Angular defaults to standalone components. That means when you create a new Angular application today then all components that are generated through the Angular CLI are standalone components.

2. When you have a large(r) code base (like we do) and you want to reuse a component that already exists in the codebase then you first have to find the component and then find the module where this component is declared. Then you have to import the whole module into your new module/component. With this you also import all other modules, components, directives and pipes that are exported by the existing module. So in conclusion standalone components can be reused more easily because they contain everything they need to get rendered. I don’t have to look for the correct module to make use of them. And they can be used without pulling in a bunch of modules, components, pipes and directives that are not needed in specific cases.

3. When you have to write a unit test for a component (.spec.ts file) you also need to provide all necessary modules, components, directives and pipes for the test environment. With standalone components you can see very quickly which dependencies are needed to render the component by looking at the imports array. Even simpler you can just copy the imports array. To be fair you could also just import the module where the component you want to test is declared. But for that you need to search for the module again.

4. Standalone components reduce writing, reading and maintaining of unnecessary boilerplate code.

[Getting startet with standalone components](https://angular.io/guide/standalone-components)
[Ionic Angular Build Options](https://ionicframework.com/docs/angular/build-options)

[&larr; Back](../README.md) | [@Input Decorator &rarr;](./Input.md)
