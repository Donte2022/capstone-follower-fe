import { Component, OnInit } from '@angular/core';
import {DisplayService} from "../display.service";
import {IStage} from "../main/interfaces/IStage";
import {SurveyService} from "../survey.service";
import {IComplete} from "../main/interfaces/IComplete";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  stageData =
      // !: IStage
      [
        {
          "id": 1,
          "StageTitle": "Holiday Shopping",
          "startDate": "2020-03-05",
          "endDate": "2020-03-05",
          "description": "Things that makes you smile"
        }
      ]

  // "idOfTitle": 1
  // "process": string,
  // prompt: string

  responseText: any;

  constructor(private displayService: DisplayService,
              private surveyService: SurveyService) { }

  ngOnInit(): void {
  }

    onCancel() {
        console.log("back to main")
      this.displayService.$isTakingSurvey.next(false);
        this.displayService.$isViewingMain.next(true);
    }

  submitStage(completeStage: NgForm) {
    console.log("submitting survey")
    console.log(completeStage)
    this.displayService.$isViewingMain.next(true);
    this.displayService.$isTakingSurvey.next(false);
    this.displayService.$isViewingWelcome.next(false);
    this.surveyService.submitStage(completeStage.value);
  }
}
