import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Addcomponent } from './components/addTask/add_compononet';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { FormsModule } from '@angular/forms';
import { StatusTaskDirective } from './directives/status-task.directive';
import { ConfirmDelete } from './directives/confirm_delete';

@NgModule({
  declarations: [
    AppComponent,
    ListTaskComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Addcomponent, 
    StatusTaskDirective,
    ConfirmDelete
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
