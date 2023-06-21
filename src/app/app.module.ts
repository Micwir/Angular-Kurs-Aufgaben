import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BasicsAssignment3StartComponent } from './basics-assignment3-start/basics-assignment3-start.component';

@NgModule({
  declarations: [AppComponent, BasicsAssignment3StartComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
