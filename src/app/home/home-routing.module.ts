import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

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
            loadChildren: '../john/john.module#JohnPageModule'
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
