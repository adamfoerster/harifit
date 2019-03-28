import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { PageNotFoundComponent } from '../core/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'weight',
        children: [
          {
            path: '',
            loadChildren: '../weight/weight.module#WeightPageModule'
          }
        ]
      },
      {
        path: 'john',
        children: [
          {
            path: '',
            loadChildren: '../challenge/challenge.module#ChallengePageModule'
          }
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '',
            loadChildren: '../settings/settings.module#SettingsPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home/weight',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/weight',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
