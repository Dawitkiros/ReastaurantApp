import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { GuardGuard } from './guard.guard';

const routes: Routes = [
  {path: "Menu", component: MenuComponent},
  {path: "Edit/:menuId", component: EditComponent, canActivate: [GuardGuard]},
  {path: "Create", component: CreateComponent, canActivate: [GuardGuard]},
  {path: "Home", component: HomeComponent},
  {path: "MenuList", component: MenuListComponent, canActivate: [GuardGuard]},
  {path: "Error", component: ErrorComponent},
  {path: "Login", component: LoginComponent},
  { path: '', component: HomeComponent },
  { path: '**', component: ErrorComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
