import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorBoxesPanelComponent } from './components/color-boxes-panel/color-boxes-panel.component';
import { ScreensPanelComponent } from './components/screens-panel/screens-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorBoxesPanelComponent,
    ScreensPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
