import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarListComponent} from './car-list/car-list.component';
import {CarEditComponent} from './car-edit/car-edit.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './auth/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'car-list', component: CarListComponent },
  { path: 'car/:id', component: CarEditComponent },
  { path: 'login', component: LoginComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
