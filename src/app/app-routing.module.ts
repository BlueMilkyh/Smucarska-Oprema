import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CardListComponent } from './includes/card-list/card-list.component';
import { CreatePostComponent } from './includes/create-post/create-post.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: CardListComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'create', component: CreatePostComponent, canActivate: [authGuard]},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
