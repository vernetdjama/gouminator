import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ListVolumeRadiusComponent } from './list-volume-radius.component';


const routes: Routes = [
  {
    path: '',
    component: ListVolumeRadiusComponent,
  }
];

@NgModule({
  declarations: [
    ListVolumeRadiusComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ListVolumeRadiusModule { }
