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

  // title = "stageForm"
  // stageForm!: FormGroup;

  latestStageList!: IStage[];
  latestProcessList!: IStage[];


  stageData =
      // !: IStage
      [
        {
          "id": 1,
          "stageTitle": "Holiday Shopping",
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
              private surveyService: SurveyService,
              private httpService: HttpService) {

    this.httpService.getStages()
        .pipe(first()).subscribe({
      next: (data) => {
        console.log(data)
        // @ts-ignore
        this.latestStageList = data;
        console.log(this.latestStageList)
      },
      error: (err) => {
        console.log(err)
      }
    })


    this.httpService.getProcess()
        .pipe(first()).subscribe({
      next: (data) => {
        console.log(data)
        // @ts-ignore
        this.latestProcessList = data;
        console.log(this.latestProcessList)
      },
      error: (err) => {
        console.log(err)
      }
    })

  }

  ngOnInit(): void {
    // this.stageForm = new FormGroup({
    //   stageTitle: new FormGroup(null),
    //   startDate: new FormGroup(null),
    //   endDate: new FormGroup(null),
    //   description: new FormGroup(null),
    //   process: new FormGroup(null),
    //   prompt: new FormGroup(null),
    //   response: new FormGroup(null)
    // });
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
