import {Component, Input} from '@angular/core';
import {Programme} from '../../../services/models/programme';

@Component({
  selector: 'app-movies-list-item-content',
  templateUrl: './movies-list-item-content.component.html',
  styleUrls: ['./movies-list-item-content.component.css']
})
export class MoviesListItemContentComponent {

  @Input()
  movie: Programme;

}
