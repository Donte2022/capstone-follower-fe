import { Component, OnInit } from '@angular/core';
import {DisplayService} from "../display.service";

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  constructor(private displayService: DisplayService) { }

  ngOnInit(): void {
  }

    onCancel() {
        console.log("back to main")
      this.displayService.$isTakingSurvey.next(false);
        this.displayService.$isViewingMain.next(true);
    }
}
