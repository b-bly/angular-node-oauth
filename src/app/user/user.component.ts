import { Component, OnInit, Input } from '@angular/core';
import * as types from '../types';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user: types.User;

  constructor() { }

  ngOnInit() {}

}
