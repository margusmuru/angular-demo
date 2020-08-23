import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {MoviesResponseModel} from './models/movies-response.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvService {
  readonly url = 'https://www.kavad.ee/programme/listing/pop/';

  constructor(private http: HttpClient) {
  }

  getTodayMoviesSchedule(dateString: string): Observable<MoviesResponseModel> {
    const filterObject = { filter: 'movies', subslug: 'undefined' };
    return this.http.get<MoviesResponseModel>(this.url + dateString, {params: filterObject});
  }
}
