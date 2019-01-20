import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-production-year',
  templateUrl: './data-range-element.component.html',
  styleUrls: ['./data-range-element.component.css']
})

export class DataRangeElementComponent implements OnInit {
  @Input() key: string;
  @Input() value1: number;
  @Input() value2: any;

  constructor() { }

  ngOnInit() {
  }

}
