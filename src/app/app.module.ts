import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialModule } from './ng-material.module';
import { ViewComponent } from './view/view.component';
import { ToDoFormsComponent } from './view/to-do-forms/to-do-forms.component';
import { ToDoListComponent } from './view/to-do-list/to-do-list.component';
import { ToDoItemDetailsComponent } from './view/to-do-item-details/to-do-item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    ToDoFormsComponent,
    ToDoListComponent,
    ToDoItemDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
