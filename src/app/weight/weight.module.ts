import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WeightPage } from './weight.page';
import { GraphComponent } from './graph/graph.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: '',
    component: WeightPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WeightPage, GraphComponent, FormComponent]
})
export class WeightPageModule {}
