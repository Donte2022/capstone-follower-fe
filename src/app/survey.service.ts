import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {IComplete} from "./main/interfaces/IComplete";

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private httpService: HttpService) {

  }

    submitStage(completeStage: IComplete) {

        if (!completeStage.prompt.length) {
          console.log ("Field is empty");
        }

        if (completeStage.prompt.length)
        {
          console.log(completeStage)
          console.log(completeStage.prompt)

          const stage: IComplete = {
            id: completeStage.id,
            idOfTitle: completeStage.idOfTitle,
            StageTitle: completeStage.StageTitle,
            startDate: completeStage.startDate,
            endDate: completeStage.endDate,
            description: completeStage.description,
            prompt: completeStage.prompt,
            process: completeStage.process,
            response: completeStage.response,
          }

          this.httpService.completeStage(stage).subscribe({
            next: (completeStage) => {

              console.log("Prompt was Created!")
              console.log(completeStage)
            },
            error: (error) => {

              console.log("Fail to create Prompt!")
              console.log(error)
            },
          });
        }
        return true;
      }
}
