import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-assignment3-start',
  templateUrl: './basics-assignment3-start.component.html',
  styleUrls: ['./basics-assignment3-start.component.css']
})
export class BasicsAssignment3StartComponent {
  showSecret = false;
  logs:any = [];

  toggleShowSecret() {
    this.showSecret = !this.showSecret;
    // this.logs.push(this.logs.length + 1);
    this.logs.push(new Date());
    return this.showSecret;
  }

  getBackgroundColor(index:number) {
    if(index >= 5){
      return "blue";
    }
    return "";
  }
}
