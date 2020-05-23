import { Component, OnInit } from '@angular/core';
import { PlusService } from '../plus.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private plusService: PlusService) { }

  async ngOnInit() {
    await this.plusService.getPlusInfo();
  }
}
