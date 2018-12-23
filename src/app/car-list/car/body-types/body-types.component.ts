import {Component, Input, OnInit} from '@angular/core';
import {BodyType} from '../../../model/typeOfBody.model';

@Component({
  selector: 'app-body-types',
  templateUrl: './body-types.component.html',
  styleUrls: ['./body-types.component.css']
})
export class BodyTypesComponent implements OnInit {

  @Input() bodyTypeList: BodyType[];

  constructor() { }

  ngOnInit() {
  }

}
