import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddOrUpdateComponent } from './components/add-or-update/add-or-update.component';
import { ListTodoComponent } from './components/list-todo/list-todo.component';

@NgModule({
  declarations: [AppComponent, AddOrUpdateComponent, ListTodoComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
