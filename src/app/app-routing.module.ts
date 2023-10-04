import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './pages/notes/notes.component';
import { ContentsComponent } from './pages/contents/contents.component';
import { ExtrasComponent } from './pages/extras/extras.component';
import { FormsComponent } from './pages/forms/forms.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  {path:'notes', component:NotesComponent ,pathMatch:'full' },
  {path:'contents', component:ContentsComponent ,pathMatch:'full' },
  {path:'extras', component: ExtrasComponent,pathMatch:'full' },
  {path:'form', component:FormsComponent ,pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
