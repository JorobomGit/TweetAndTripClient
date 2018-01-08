import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './app.home.html',
  styleUrls: ['./app.home.css']
})
export class AppHomeComponent {
  disableButton = true;
  loadingButton = false;
  disableButtonAttr = false;
  disableInput = undefined;
  search = 'Search!';


  onClickSearch() {
    this.disableButton = true;
    this.loadingButton = true;
    this.disableInput = true;
    this.disableButtonAttr = true;
  }

  onInput(event) {
    this.disableButton = !(event.srcElement.value.length > 0);
    this.disableButtonAttr = !(event.srcElement.value.length > 0) ? true : undefined;
  }
}
