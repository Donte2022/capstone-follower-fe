import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IStage} from "./main/interfaces/IStage";

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
}
