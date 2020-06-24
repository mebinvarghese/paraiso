import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, PreloadAllModules } from '@angular/router';
import { ApplicationStateService } from './core/services/application-state.service';

const desktop_routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "full" },
  {
    path: '',
    loadChildren: () => import('./desktop/desktop.module').then(m => m.DesktopModule)
  },
  // directs all other routes to the main page
  { path: '**', redirectTo: '' }
];

const mobile_routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "full" },
  {
    path: '',
    loadChildren: () => import('./mobile/mobile.module').then(m => m.MobileModule)
  },
  // directs all other routes to the main page
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(desktop_routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  public constructor(private router: Router,
    private applicationStateService: ApplicationStateService) {

    if (this.applicationStateService.getIsMobileResolution()) {
      this.router.resetConfig(mobile_routes);
    }
  }
}