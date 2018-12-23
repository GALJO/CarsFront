import {Component, Input, OnInit} from '@angular/core';
import {Engine} from '../../../model/engine.model';

@Component({
  selector: 'app-engines',
  templateUrl: './engines.component.html',
  styleUrls: ['./engines.component.css']
})
export class EnginesComponent implements OnInit {

  @Input() engineList: Engine[];

  constructor() { }

  ngOnInit() {
  }

}
