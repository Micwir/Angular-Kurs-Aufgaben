import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BasicsAssignment3StartComponent } from './basics-assignment3-start/basics-assignment3-start.component';
import { CmpDatabindingAssignmentStartComponent } from './cmp-databinding-assignment-start/cmp-databinding-assignment-start.component';
import { GameControllComponent } from './cmp-databinding-assignment-start/game-controll/game-controll.component';
import { OddComponent } from './cmp-databinding-assignment-start/odd/odd.component';
import { EvenComponent } from './cmp-databinding-assignment-start/even/even.component';

@NgModule({
  declarations: [AppComponent, BasicsAssignment3StartComponent, CmpDatabindingAssignmentStartComponent, GameControllComponent, OddComponent, EvenComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
