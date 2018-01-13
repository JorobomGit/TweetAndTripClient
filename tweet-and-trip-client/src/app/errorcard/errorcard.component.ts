import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-errorcard',
  templateUrl: './errorcard.component.html',
  styleUrls: ['./errorcard.component.css']
})
export class ErrorcardComponent implements OnInit {
  @Input() responseText: string;
  constructor() { }

  errorTitle = 'Error!';
  errorText = 'Make sure that the account is public and exists and search again.';
  btnText = 'Try again';

  ngOnInit() {
  }

}
