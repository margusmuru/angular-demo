import {Component, OnInit} from '@angular/core';
import {TvService} from '../services/tv.service';
import {Programme} from '../services/models/programme';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {

  hasError: boolean;
  moviesList: Programme[];
  date: string;

  constructor(private tvService: TvService, private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    const formattedDate = this.datePipe.transform(new Date(), 'dd-MM-yyyy');
    this.getMovies(formattedDate);
  }

  getMovies(inputDate: string): void {
    this.tvService.getTodayMoviesSchedule(inputDate).subscribe(response => {
      this.moviesList = response.schedule.programme;
      this.date = response.schedule.date;
    }, () => {
      this.hasError = true;
    });
  }

  // NEVER DO THAT WAY
  toUpperCase(value: string): string {
    console.log('toUpperCase called');
    if (!value) {
      return '';
    }
    return value.toUpperCase();
  }
}
