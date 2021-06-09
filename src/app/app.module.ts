import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EagerComponent } from './eager/eager.component';
import { PollingModule } from './polling/polling.module';

@NgModule({
  declarations: [
    AppComponent,
    EagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PollingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
