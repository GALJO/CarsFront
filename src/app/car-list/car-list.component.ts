import {Component, OnInit} from '@angular/core';
import {Car} from '../model/car.model';
import {Guid} from '../utils/guid';
import {CarService} from '../service/car.service';
import {style} from '@angular/animations';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  carList: Car[];
  newCar = new Car(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carList = this.carService.getCarList();
    this.carService.carListChanged.subscribe(
      cl => this.carList = cl
    );
  }

  onAddCar() {
    this.newCar.id = Guid.newGuid();
    this.carList.push( this.newCar );
  }

  onMarkSortCar() {
    this.carService.sortCarListByMark();
  }

  onCapacitySortCar() {
    this.carService.sortCarListByCapacity();
  }

  onMarkedSortCar() {
    this.carService.sortCarListByMarked();
  }

  tag(name: string) {
    this.carService.filterCarListByTag(name);
  }
}
