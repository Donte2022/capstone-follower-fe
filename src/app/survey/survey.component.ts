import { Component, OnInit } from '@angular/core';
import {DisplayService} from "../display.service";
import {IStage} from "../main/interfaces/IStage";
import {SurveyService} from "../survey.service";
import {IComplete} from "../main/interfaces/IComplete";
import {FormGroup, NgForm} from "@angular/forms";
import {first} from "rxjs";
import {HttpService} from "../http.service";

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  
  latestStageList!: IStage[];
  latestProcessList!: IStage[];


  stageData =
      [
        {
          "id": 1,
          "stageTitle": "Holiday Shopping",
          "startDate": "2020-03-05",
          "endDate": "2020-03-05",
          "description": "Things that makes you smile"
        }
      ]

  responseText: any;
  prompt: any;

  constructor(private displayService: DisplayService,
              private surveyService: SurveyService,
              private httpService: HttpService) {

    this.httpService.getStages()
        .pipe(first()).subscribe({
      next: (data) => {
        console.log(data)
        // @ts-ignore
        this.latestStageList = data;
      },
      error: (err) => {
      }
    })


    this.httpService.getProcess()
        .pipe(first()).subscribe({
      next: (data) => {
        console.log(data)
        // @ts-ignore
        this.latestProcessList = data;
      },
      error: (err) => {
      }
    })

  }

  ngOnInit(): void {
  }

    onCancel() {
      this.displayService.$isTakingSurvey.next(false);
        this.displayService.$isViewingMain.next(true);
    }

  submitStage(completeStage: NgForm) {
    this.displayService.$isViewingMain.next(true);
    this.displayService.$isTakingSurvey.next(false);
    this.displayService.$isViewingWelcome.next(false);
    this.surveyService.submitStage(completeStage.value);
  }
}
