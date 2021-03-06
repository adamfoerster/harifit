import { WeightPageModule } from './../weight/weight.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JohnPage } from './john.page';
import { CoreModule } from '../core/core.module';

const routes: Routes = [
  {
    path: '',
    component: JohnPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    WeightPageModule
  ],
  declarations: [JohnPage]
})
export class JohnPageModule {}
