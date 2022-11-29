import { Component, OnInit } from '@angular/core';
import {DisplayService} from "../display.service";
import {IStage} from "../main/interfaces/IStage";
import {SurveyService} from "../survey.service";
import {IComplete} from "../main/interfaces/IComplete";
import {FormGroup, NgForm} from "@angular/forms";
import {first} from "rxjs";
import {HttpService} from "../http.service";
import {IPrompt} from "../main/interfaces/IPrompt";
import {ITitle} from "../main/interfaces/ITitle";

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  
  latestStageList!: ITitle[];
  latestProcessList!: IStage[];
  latestPromptList!: IPrompt[];


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
  prompt: string | undefined;
  prompt2: string | undefined;
  prompt3: string | undefined;
  prompt4: string | undefined;
  response: string | undefined;
  response2: string | undefined;
  response3: string | undefined;
  response4: string | undefined;

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


    this.httpService.getPrompts()
        .pipe(first()).subscribe({
      next: (data) => {
        console.log(data)
        // @ts-ignore
        this.latestPromptList = data;
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

  submitForm(completeStage: NgForm) {
    console.log("submitting results")
    console.log(completeStage)
    this.displayService.$isViewingMain.next(false);
    this.displayService.$isTakingSurvey.next(false);
    this.displayService.$isViewingWelcome.next(true);
    this.surveyService.submitStage(completeStage.value);
  }

  exitApp() {
    this.displayService.$isViewingMain.next(false);
    this.displayService.$isTakingSurvey.next(false);
    this.displayService.$isViewingWelcome.next(true);
  }
}
