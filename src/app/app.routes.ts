import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { AlimentationComponent } from './alimentation/alimentation.component';
import { ProductionComponent } from './production/production.component';
import { RevenuComponent } from './Revenue/revenu.component';
import { MainComponentComponent } from '../main-component/main-component.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: MainComponentComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        /* canActivate: [AuthGuard] */
      },
      {
        path: 'alimentation',
        component: AlimentationComponent,
        /* canActivate: [AuthGuard] */
      },
      {
        path: 'productions',
        component: ProductionComponent,
        /* canActivate: [AuthGuard] */
      },
      {
        path: 'revenu',
        component: RevenuComponent,
      /*   canActivate: [AuthGuard] */
      },
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }