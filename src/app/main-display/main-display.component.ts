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
      },
      error: (err) => {
      }
    })
  }

  ngOnInit(): void {

  }



  takeSurvey(displayInfo: IStage) {
    this.displayService.$isViewingMain.next(false);
    this.displayService.$isTakingSurvey.next(true);
  }
}
