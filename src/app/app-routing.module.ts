import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LayoutComponent } from './pages/layout/layout.component';
import { Router, NavigationEnd } from '@angular/router';
import { ResultComponent } from './pages/exception/result.component';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule), canActivate: [AuthGuard] },
  {
    path: '', component: LayoutComponent, canActivate: [AuthGuard],
    children: [
      {
        path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard]
      },
      { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule), canActivate: [AuthGuard] },
      { path: 'system', loadChildren: () => import('./pages/system/system.module').then(m => m.SystemModule), canActivate: [AuthGuard] },
      { path: 'inquire', loadChildren: () => import('./pages/inquire/inquire.module').then(m => m.InquireModule), canActivate: [AuthGuard] },
      { path: 'service', loadChildren: () => import('./pages/service/service.module').then(m => m.ServiceModule), canActivate: [AuthGuard] },
      { path: 'advance', loadChildren: () => import('./pages/advance/advance.module').then(m => m.AdvanceModule), canActivate: [AuthGuard] },
      { path: 'result/success', loadChildren: () => import('./pages/result/success/success.module').then(m => m.SuccessModule), canActivate: [AuthGuard] },
      { path: 'result/fail', loadChildren: () => import('./pages/result/fail/fail.module').then(m => m.FailModule), canActivate: [AuthGuard] },
      { path: 'account/settings', loadChildren: () => import('./pages/account/settings/settings.module').then(m => m.SettingsModule), canActivate: [AuthGuard] },
      { path: 'error', loadChildren: () => import('./pages/exception/result.module').then(m => m.ResultModule), },
      { path: '**', component: ResultComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  constructor() {
  }
}
