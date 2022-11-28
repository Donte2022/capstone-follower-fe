import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule,} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { MainComponent } from './main/main.component';
import { MainDisplayComponent } from './main-display/main-display.component';
import { SurveyComponent } from './survey/survey.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainDisplayComponent,
    SurveyComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
    NgbModule,
      NgbAlertModule,
      CommonModule
      




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
