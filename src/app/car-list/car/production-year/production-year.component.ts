import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-production-year',
  templateUrl: './production-year.component.html',
  styleUrls: ['./production-year.component.css']
})

export class ProductionYearComponent implements OnInit {
  @Input() key: string;
  @Input() value1: number;
  @Input() value2: any;

  constructor() { }

  ngOnInit() {
  }

}
