import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DisplayService {


  $isViewingMain = new BehaviorSubject<boolean>(false);
  $isTakingSurvey = new BehaviorSubject<boolean>(false);
    $isViewingWelcome = new BehaviorSubject<boolean>(false);

  constructor(private httpService :HttpService) { }
}
