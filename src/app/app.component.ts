import { Component } from '@angular/core';
import {DisplayService} from "./display.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'capstone-follower-fe';

  isViewingMain: boolean = false;
  isTakingSurvey: boolean = false;
  isViewingWelcome: boolean = true;

    ngOnInit(): void {
        this.displayService.$isViewingMain.next(false);
        this.displayService.$isTakingSurvey.next(false);
        this.displayService.$isViewingWelcome.next(true);
    }

  constructor(private displayService: DisplayService) {

    this.displayService.$isViewingMain.subscribe(
        isViewingMain => {
          this.isViewingMain = isViewingMain;
        });

  this.displayService.$isTakingSurvey.subscribe(
      isTakingSurvey => {
  this.isTakingSurvey = isTakingSurvey;
        });

      this.displayService.$isViewingWelcome.subscribe(
          isViewingWelcome => {
              this.isViewingWelcome = isViewingWelcome;
          });



  }
}
