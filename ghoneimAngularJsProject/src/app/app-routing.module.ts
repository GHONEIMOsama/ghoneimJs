import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatFormComponent } from './cat-form/cat-form.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  {path: "", component: WelcomePageComponent},
  {path: "catForm", component: CatFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
