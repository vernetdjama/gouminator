import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CalculateRadiusComponent } from './calculate-radius.component';

const routes: Routes = [
  {
    path: '',
    component: CalculateRadiusComponent,
  }
];

@NgModule({
  declarations: [
    CalculateRadiusComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class CalculateRadiusModule { }
