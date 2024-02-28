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
    children: [],
  },
  {
    path: 'input',
    children: [],
  },
  {
    path: 'control-flow',
    children: [],
  },
  {
    path: 'signals',
    children: [],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
