import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Car } from '../../model/car.model';
import {CarService} from '../../service/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input() carItem: Car;
  showMoreInfo: Boolean = false;

  constructor(private carService: CarService) { }

  ngOnInit() {
  }

  onEdit() {
    console.log('Edit');
  }

  onDelete() {
    if (confirm('Czy na pewno chcesz usunąć samochód ' + this.carItem.mark + ' ' + this.carItem.model[0] + '?')) {
      this.carService.deleteCar(this.carItem.id);
    }
  }

  onMoreInfo() {
    this.showMoreInfo = !this.showMoreInfo;
  }

  onMark() {
    this.carService.markCar(this.carItem.id);
  }
}
