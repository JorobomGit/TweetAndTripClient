import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  state = 'loading';
  results = undefined;
  displayedColumns = ['position', 'name', 'userVenue1', 'userVenue2', 'userVenue3'];
  error;
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.http.get('http://localhost:4567/destination?name=' + params['name']).subscribe(data => {
         const acc = [];
          Object.keys(data).forEach( index => {
            const destination = data[index];
            acc.push({
              'position': Number(index) + 1,
              'name': destination.name,
              'userVenue1': destination.userVenues[0],
              'userVenue2': destination.userVenues[1],
              'userVenue3': destination.userVenues[2]
            });
          });
          this.state = 'success';
          this.results = new MatTableDataSource<Element>(acc);

        },
        err => {
          this.state = 'error';
          this.error = err;
          console.log(err);
        }
      );
    });
  }

}

export interface Element {
  position: number;
  name: string;
  userVenue1: object;
  userVenue2: object;
  userVenue3: object;
}

