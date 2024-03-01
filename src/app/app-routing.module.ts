import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'module/users',
    loadChildren: () =>
      import('./modules-vs-standalone/user-module-based/user.module').then((m) => m.UserModule),
  },
  {
    path: 'standalone',
    children: [
      {
        path: 'users',
        loadComponent: () =>
          import('./modules-vs-standalone/user-standalone/user-list.component').then(
            (m) => m.UserListComponent
          ),
        // loadChildren: () =>
        //   import('./modules-vs-standalone/user-standalone/routes').then((m) => m.USER_ROUTES),
      },
      {
        path: 'pokemons',
        loadComponent: () =>
          import('./modules-vs-standalone/pokemon/pokemon-list.component').then(
            (m) => m.PokemonListComponent
          ),
      },
    ],
  },
  {
    path: 'input',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./input-decorator/parent.component').then((m) => m.ParentComponent),
      },
      {
        path: ':message',
        loadComponent: () =>
          import('./input-decorator/child.component').then((m) => m.ChildComponent),
      },
    ],
  },
  {
    path: 'control-flow',
    children: [
      {
        path: 'zero-odd-even',
        loadComponent: () =>
          import('./control-flow/zero-odd-even.component').then((m) => m.ZeroOddEvenComponent),
      },
      {
        path: 'posts',
        loadComponent: () => import('./control-flow/posts.component').then((m) => m.PostsComponent),
      },
    ],
  },
  {
    path: 'signals',
    children: [
      {
        path: 'counter',
        loadComponent: () => import('./signals/counter.component').then((m) => m.CounterComponent),
      },
      {
        path: 'counter-bloated',
        loadComponent: () =>
          import('./signals/counter/counter-wrapper.component').then(
            (m) => m.CounterWrapperComponent
          ),
      },
      {
        path: 'billing',
        loadComponent: () =>
          import('./signals/billing/billing.component').then((m) => m.BillingComponent),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      bindToComponentInputs: true, // This is need when using component inputs for dynamic route parameters
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
