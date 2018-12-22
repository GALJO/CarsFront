import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../model/car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input() carItem: Car;
  showMoreInfo: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onEdit() {
    console.log('Edit');
  }

  onDelete() {
    console.log('Delete');
  }

  onMoreInfo() {
    this.showMoreInfo = !this.showMoreInfo;
  }

}
