import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'calculate-radius',
    pathMatch: 'full'
  },
  {
    path: 'calculate-radius',
    loadChildren: () =>
      import('./calculate-radius/calculate-radius.module').then(m => m.CalculateRadiusModule)
  },
  {
    path: 'list-volume-radius',
    loadChildren: () => import('./list-volume-radius/list-volume-radius.module').then(m => m.ListVolumeRadiusModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
