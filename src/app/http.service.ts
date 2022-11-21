import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IStage} from "./main/interfaces/IStage";
import {IComplete} from "./main/interfaces/IComplete";
import {IProcess} from "./main/interfaces/IProcess";

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

  getProcess() {
    return this.httpClient.get(
        "http://localhost:8080/api/prompt/all"
    ) as Observable<IProcess>;
  }


  completeStage(stageComplete: IComplete) {
    return this.httpClient.post(
        "http://localhost:8080/api/stage",
        stageComplete
    ) as Observable<IComplete>;
  }
}
