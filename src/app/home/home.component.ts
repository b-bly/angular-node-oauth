import { Component, OnInit } from '@angular/core';
import * as queryString from 'query-string';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import * as types from '../types';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: types.User;

  constructor(private router: Router,
    public authService: AuthService) { }

  async ngOnInit() {
    await this.getUser();
    await this.getPlusInfo();
  }


  async getUser() {
    this.user = await this.authService.getUser();
    if (this.user.loggedIn == false) {
      this.router.navigate(['/login'])
    }
  }

  async getPlusInfo() {
    const plusInfo = await this.authService.getPlusInfo();
  }
}
