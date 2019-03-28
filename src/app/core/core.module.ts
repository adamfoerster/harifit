import { FormsModule } from '@angular/forms';
import { ObjectiveService } from './objective.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../../environments/environment';
import { CoreService } from './core.service';
import { IonicModule } from '@ionic/angular';
import { GraphComponent } from './graph/graph.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    GraphComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    IonicModule
  ],
  providers: [
    ObjectiveService,
    CoreService
  ],
  entryComponents: [],
  exports: [ GraphComponent, PageNotFoundComponent ]
})
export class CoreModule { }
