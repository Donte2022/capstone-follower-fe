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
            stageId: completeStage.stageId,
            idOfTitle: completeStage.idOfTitle,
            stageTitle: completeStage.stageTitle,
            startDate: completeStage.startDate,
            endDate: completeStage.endDate,
            description: completeStage.description,
            process: completeStage.process,
            prompt: completeStage.prompt,
            prompt2: completeStage.prompt2,
            prompt3: completeStage.prompt3,
            prompt4: completeStage.prompt4,
            response: completeStage.response,
            response2: completeStage.response2,
            response3: completeStage.response3,
            response4: completeStage.response4
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
