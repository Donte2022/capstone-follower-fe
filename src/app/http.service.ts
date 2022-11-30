import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IStage} from "./main/interfaces/IStage";
import {IComplete} from "./main/interfaces/IComplete";
import {IProcess} from "./main/interfaces/IProcess";
import {IPrompt} from "./main/interfaces/IPrompt";
import {ITitle} from "./main/interfaces/ITitle";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) {
  }

  getStages() {
    return this.httpClient.get(
        "http://localhost:8080/api/stage/all"
    ) as Observable<IStage>;
  }

  getTitles() {
    return this.httpClient.get(
        "http://localhost:8080/api/titles/all"
    ) as Observable<ITitle>;
  }

  getProcess() {
    return this.httpClient.get(
        "http://localhost:8080/api/prompt/all"
    ) as Observable<IProcess>;
  }

  getPrompts() {
    return this.httpClient.get(
        "http://localhost:8080/api/prompt/all"
    ) as Observable<IPrompt>;
  }


  completeStage(stageComplete: IComplete) {
    return this.httpClient.post(
        "http://localhost:8888/api/completedstage",
        stageComplete
    ) as Observable<IComplete>;
  }
}
