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
  subtitle = 'Let\'s find your next adventure!';
  name = '';

  // NEXT: Bind button click to make http request
  // Create new screen with data

  onClickSearch() {
    this.disableButton = true;
    this.loadingButton = true;
    this.disableInput = true;
    this.disableButtonAttr = true;
  }

  onInput(event) {
    this.name = event.srcElement.value;
    this.disableButton = !(event.srcElement.value.length > 0);
    this.disableButtonAttr = !(event.srcElement.value.length > 0) ? true : undefined;
  }
}
