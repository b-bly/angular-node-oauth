import { Component, OnInit } from '@angular/core';
import { PlusService } from '../plus.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private plusService: PlusService) { }

  async ngOnInit() {
    const plusInfo = await this.plusService.getPlusInfo();
    console.log(plusInfo);
  }

}
