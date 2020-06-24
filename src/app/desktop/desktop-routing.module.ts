import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesktopComponent } from './desktop.component';


const routes: Routes = [
  {
    path: '',
    component: DesktopComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'about-us',
        loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'services',
        loadChildren: () => import('./pages/services/services.module').then(m => m.ServicesModule)
      },
      {
        path: 'tracking',
        loadChildren: () => import('./pages/tracking/tracking.module').then(m => m.TrackingModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesktopRoutingModule { }

// ./pages/home/home.module#HomeModule