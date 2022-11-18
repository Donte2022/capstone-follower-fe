import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import {DisplayService} from "../display.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private httpService: HttpService,
              private displayService: DisplayService) { }

  ngOnInit(): void {
  }

  exitApp() {
    this.displayService.$isViewingMain.next(false);
    this.displayService.$isTakingSurvey.next(false);
    this.displayService.$isViewingWelcome.next(true);
  }
}
