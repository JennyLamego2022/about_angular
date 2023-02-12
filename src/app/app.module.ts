import { ProjectOneComponent } from './project-one/project-one.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectOne2Component } from './project-one2/project-one2.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectOneComponent,
    ProjectOne2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
