import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MysticValeCompanionComponent } from './mystic-vale-companion/mystic-vale-companion.component';

@NgModule({
  declarations: [
    AppComponent,
    MysticValeCompanionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
