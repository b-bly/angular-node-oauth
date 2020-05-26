import { Component, OnInit } from '@angular/core';
import { PlusService } from '../plus.service';
import * as queryString from 'query-string';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private plusService: PlusService,
    private router: Router) { }

  async ngOnInit() {
    const plusInfo = await this.plusService.getPlusInfo();
    console.log(plusInfo);

    var query: any = queryString.parse(this.router.url);

    console.log('url parsed: ')
    console.log(query);
    if (query['/?token']) {
      window.localStorage.setItem("jwt", query['/?token']);
    }
  }

}
