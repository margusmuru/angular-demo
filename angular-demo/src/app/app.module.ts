import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {TvService} from './services/tv.service';
import {HttpClientModule} from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {DatePipe} from '@angular/common';
import { DatePickerComponent } from './page-one/components/date-picker/date-picker.component';
import { MoviesListItemContentComponent } from './page-one/components/movies-list-item-content/movies-list-item-content.component';
import { ToUppercasePipe } from './page-one/components/to-uppercase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent,
    DatePickerComponent,
    MoviesListItemContentComponent,
    ToUppercasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [
    MatDatepickerModule,
    DatePipe,
    TvService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
