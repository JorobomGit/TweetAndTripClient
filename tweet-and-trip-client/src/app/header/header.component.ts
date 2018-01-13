import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  twitterUrl = 'https://twitter.com/TweetAndTrip';
  gitUrl = 'https://github.com/JorobomGit';

  constructor() { }

  ngOnInit() {
  }

  openNewTab(url) {
    window.open(url);
  }

}
