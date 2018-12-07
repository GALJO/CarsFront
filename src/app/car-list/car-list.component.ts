import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car.model';
import { Guid } from '../utils/guid';
import { GearBox } from '../model/gearbox.model';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  carList: Car[] = [];
  newCar = new Car(null, null, null, null, null, null, null, null, null, null);

  constructor() {
    // tslint:disable:max-line-length
    this.carList.push( new Car(Guid.newGuid(), 'Volkswagen', ['Passat B1', 'Dasher'], '1973-1977', 45, 'Giorgetto Giugiaro', ['przedni'],
      [new GearBox([3], 'automatyczna'), new GearBox([4], 'manualna')],
      430, 'https://firebasestorage.googleapis.com/v0/b/cars-7bb35.appspot.com/o/volkswagen-passat-b1.jpg?alt=media&token=934750e8-b1c8-4f6b-87d2-23ea76328865'));
    this.carList.push( new Car(Guid.newGuid(), 'Volkswagen', ['Passat B8', 'Passat GT'], 'od 2014', 70, null, ['przedni', '4Motion'],
    [new GearBox([6], 'manualna'), new GearBox([6], 'automatyczna'), new GearBox([7], 'automatyczna')],
    null, 'https://firebasestorage.googleapis.com/v0/b/cars-7bb35.appspot.com/o/volkswagen-passaatB8.jpg?alt=media&token=de2ad730-0b55-4b91-9be1-29fa8703c34e'));
    this.carList.push( new Car(Guid.newGuid(), 'Toyota', ['Corolla Verso II'], '2004-2009', 55, null, null,
    [ new GearBox([5], 'manualna')],
    425, 'https://firebasestorage.googleapis.com/v0/b/cars-7bb35.appspot.com/o/toyota-corollaVersoII.JPG?alt=media&token=0b6cefc2-0baf-4797-aab7-674b85e8d619'));
  }

  ngOnInit() {
  }

  onAddCar() {
    this.newCar.id = Guid.newGuid();
    this.carList.push( this.newCar );
  }

}
