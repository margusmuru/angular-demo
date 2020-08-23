import {Component, EventEmitter, Output} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent {

  @Output()
  dateSelect: EventEmitter<string> = new EventEmitter<string>();

  constructor(private datePipe: DatePipe) {
  }

  setDateValue(input: any): void {
    const formattedDate = this.datePipe.transform(input.value, 'dd-MM-yyyy');
    this.dateSelect.emit(formattedDate);
  }

}
