import { NotesComponent } from './notes/notes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: "login",
    component: AuthComponent
  },
  {
    path: "notes",
    component: NotesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
