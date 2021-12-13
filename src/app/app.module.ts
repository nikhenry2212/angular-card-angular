import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';


import {MatCard, MatCardHeader,MatCardTitle,MatCardSubtitle,MatCardContent,MatCardActions,MatCardImage} from '@angular/material/card'

import { AppComponent } from './app.component';
import { RickComponent } from './components/rick/rick.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export const materiaDesign = [
  MatCard,
  MatCardHeader,
  MatCardTitle,
  MatCardSubtitle,
  MatCardContent,
  MatCardActions,
  MatCardImage,
  MatCardModule,
  NgbCarousel,

  NgbSlideEventSource

]
@NgModule({
  declarations: [
    AppComponent,
    RickComponent,
    
    // [...materiaDesign]
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
