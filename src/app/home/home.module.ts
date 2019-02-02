import { HomeRoutingModule } from './home-routing.module';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularFireAuthModule,
    IonicModule,
    HomeRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
