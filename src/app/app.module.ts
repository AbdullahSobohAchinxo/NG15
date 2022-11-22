import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

import { DialogAnimationsExampleComponent } from './home/dialogs/dialog-animations-example/dialog-animations-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogAnimationsExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
