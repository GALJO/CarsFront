import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car.model';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  carList: Car[] = [];
  newCar = new Car(null, null, null, null, null, null);

  constructor() {
    // tslint:disable:max-line-length
    this.carList.push( new Car('Volkswagen', 'Passat B1', '1973-1977', 45, 'Giorgetto Giugiaro', 'https://firebasestorage.googleapis.com/v0/b/cars-7bb35.appspot.com/o/volkswagen-passat-b1.jpg?alt=media&token=934750e8-b1c8-4f6b-87d2-23ea76328865'));
    this.carList.push( new Car('Volkswagen', 'Passat B8', 'od 2014', 70, null, 'https://firebasestorage.googleapis.com/v0/b/cars-7bb35.appspot.com/o/volkswagen-passaatB8.jpg?alt=media&token=de2ad730-0b55-4b91-9be1-29fa8703c34e'));
    this.carList.push( new Car('Toyota', 'Corolla Verso II', '2004-2009', 55, null, 'https://firebasestorage.googleapis.com/v0/b/cars-7bb35.appspot.com/o/toyota-corollaVersoII.JPG?alt=media&token=0b6cefc2-0baf-4797-aab7-674b85e8d619'));
  }

  ngOnInit() {
  }

  onAddCar() {
    this.carList.push( this.newCar );
  }

}
