import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Car } from '../../model/car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input() carItem: Car;
  @Output() deletedCar = new EventEmitter<Car>();
  showMoreInfo: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onEdit() {
    console.log('Edit');
  }

  onDelete() {
    if (confirm('Czy na pewno chcesz usunąć samochód ' + this.carItem.mark + ' ' + this.carItem.model[0] + '?')) {
      this.deletedCar.emit(this.carItem);
    }
  }

  onMoreInfo() {
    this.showMoreInfo = !this.showMoreInfo;
  }

  onMark() {
    this.carItem.isMarked = !this.carItem.isMarked;
  }
}
