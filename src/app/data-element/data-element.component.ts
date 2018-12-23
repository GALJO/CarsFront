import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-element',
  templateUrl: './data-element.component.html',
  styleUrls: ['./data-element.component.css']
})
export class DataElementComponent implements OnInit {

  @Input() key: string;
  @Input() value: any;
  @Input() suffix: string;
  outputValue = '';

  constructor() { }

  ngOnInit() {
    this.outputValue = this.calculateOutputValue(this.value, this.suffix);
  }

  private calculateOutputValue(value: any, suffix: string): string {
    const outSuffix = suffix == null ? '' : suffix;

    if (typeof value === 'string') {
      return value + outSuffix;
    } else if (value instanceof Array) {
      let out = '';
      value.forEach(e => out += e + ', ');
      out = out.slice(0, -2);
      return out + outSuffix;
    } else if (typeof value === 'number') {
      return value.toString() + outSuffix;
    }
    return 'brak danych';
  }

}
