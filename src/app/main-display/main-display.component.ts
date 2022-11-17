import { Component, OnInit } from '@angular/core';
import {DisplayService} from "../display.service";

@Component({
  selector: 'app-main-display',
  templateUrl: './main-display.component.html',
  styleUrls: ['./main-display.component.css']
})
export class MainDisplayComponent implements OnInit {

  constructor(private displayService: DisplayService) { }

  ngOnInit(): void {

  }

  takeSurvey() {
    console.log("taking survey")
    this.displayService.$isViewingMain.next(false);
    this.displayService.$isTakingSurvey.next(true);
  }
}
