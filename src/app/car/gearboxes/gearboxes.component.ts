import {Component, Input, OnInit} from '@angular/core';
import {GearBox} from '../../model/gearbox.model';

@Component({
  selector: 'app-gearboxes',
  templateUrl: './gearboxes.component.html',
  styleUrls: ['./gearboxes.component.css']
})
export class GearboxesComponent implements OnInit {

  @Input() gearboxList: GearBox[];

  constructor() { }

  ngOnInit() {
  }

}
