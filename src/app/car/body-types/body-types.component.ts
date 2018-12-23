import {Component, Input, OnInit} from '@angular/core';
import {TypeOfBody} from '../../model/typeOfBody.model';

@Component({
  selector: 'app-body-types',
  templateUrl: './body-types.component.html',
  styleUrls: ['./body-types.component.css']
})
export class BodyTypesComponent implements OnInit {

  @Input() bodyTypeList: TypeOfBody[];

  constructor() { }

  ngOnInit() {
  }

}
