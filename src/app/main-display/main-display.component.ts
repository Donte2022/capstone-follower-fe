import { Component, OnInit } from '@angular/core';
import {DisplayService} from "../display.service";
import {IStage} from "../main/interfaces/IStage";
import {HttpService} from "../http.service";
import {first} from "rxjs";

@Component({
  selector: 'app-main-display',
  templateUrl: './main-display.component.html',
  styleUrls: ['./main-display.component.css']
})
export class MainDisplayComponent implements OnInit {


  latestStageList!: IStage[];

  constructor(private displayService: DisplayService,
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
  }

  ngOnInit(): void {

  }



  takeSurvey(displayInfo: IStage) {
    console.log("taking survey")
    console.log(displayInfo)
    this.displayService.$isViewingMain.next(false);
    this.displayService.$isTakingSurvey.next(true);
  }
}
