import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { PnfComponent } from './components/pnf/pnf.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { UsersComponent } from './components/users/users.component';
import { InstanceService } from './services/instance.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'landing', component: LandingComponent },

  {
    path: 'sidenav',
    component: SidenavComponent, canActivate:[InstanceService],
    children: [
      { path: 'landing', component: LandingComponent },
      { path: 'users', component: UsersComponent },
    ],
  },
  // { path: '**', component: PnfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
