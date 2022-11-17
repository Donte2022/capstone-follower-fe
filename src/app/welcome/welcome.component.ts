import { Component, OnInit } from '@angular/core';
import {DisplayService} from "../display.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private displayService: DisplayService) { }

  ngOnInit(): void {
  }

    enterApp() {
      this.displayService.$isViewingMain.next(true);
      this.displayService.$isTakingSurvey.next(false);
      this.displayService.$isViewingWelcome.next(false);

    }
}
