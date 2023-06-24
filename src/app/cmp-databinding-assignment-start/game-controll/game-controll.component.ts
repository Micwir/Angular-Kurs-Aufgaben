import {Component, EventEmitter, Output} from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-game-controll',
  templateUrl: './game-controll.component.html',
  styleUrls: ['./game-controll.component.css']
})
export class GameControllComponent {

  @Output() incrementEvent = new EventEmitter<number>();
  intervall:any;

  onStop() {
    clearInterval(this.intervall);
    this.intervall = null;
  }

  onStart() {
    if(this.intervall != null){
      return;
    }
    this.intervall = setInterval(()=> this.incrementEvent.emit(1), 1000);
  }
}
