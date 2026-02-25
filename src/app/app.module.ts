import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Addcomponent } from './components/addTask/add_compononet';
import { ListTaskComponent } from './components/list-task/list-task.component'

@NgModule({
  declarations: [
    AppComponent,
    Addcomponent,
    ListTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
