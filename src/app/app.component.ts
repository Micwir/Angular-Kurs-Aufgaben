import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = "Michi";

  usernameIsEmpty() {
    if(this.username.length != 0){
      return false;
    }
    return true;
  }

  onClickReset() {
    this.username = "";
  }
}
