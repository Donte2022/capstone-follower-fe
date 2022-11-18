import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IStage} from "./main/interfaces/IStage";
import {IComplete} from "./main/interfaces/IComplete";

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

  completeStage(stageComplete: IComplete) {
    return this.httpClient.post(
        "http://localhost:8080/api/stage",
        stageComplete
    ) as Observable<IComplete>;
  }
}
