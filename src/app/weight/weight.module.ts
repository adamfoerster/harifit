import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WeightPage } from './weight.page';
import { FormComponent } from './form/form.component';
import { ProgressDialogComponent } from './progress-dialog/progress-dialog.component';

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
    CoreModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    WeightPage,
    FormComponent,
    ProgressDialogComponent
  ],
  entryComponents: [ProgressDialogComponent]
})
export class WeightPageModule {}
