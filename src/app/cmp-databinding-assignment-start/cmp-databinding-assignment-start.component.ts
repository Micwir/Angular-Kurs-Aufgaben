import { Component } from '@angular/core';

@Component({
  selector: 'app-cmp-databinding-assignment-start',
  templateUrl: './cmp-databinding-assignment-start.component.html',
  styleUrls: ['./cmp-databinding-assignment-start.component.css']
})
export class CmpDatabindingAssignmentStartComponent {

  numberStore:number[] = [];
  increment:number = 0;

  constructor() {
    this.numberStore.push(this.increment);
  }

  onIncrementEvent(value:number){
    this.increment += value;
    this.numberStore.push(this.increment);
  }
}
