import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { CatFormComponent } from './cat-form/cat-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRouteSnapshot } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    CatFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    ActivatedRouteSnapshot
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
