import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  carList = [];
  newCar = {mark: '', model: '', productionYear: '', designer: '', fuelTank: null, image: ''};

  constructor() {
    // tslint:disable-next-line:max-line-length
    this.carList.push({mark: 'Volkswagen', model: 'Passat B1', productionYear: '1973-1977', fuelTank: 45, designer: 'Giorgetto Giugiaro', image: 'https://firebasestorage.googleapis.com/v0/b/cars-7bb35.appspot.com/o/volkswagen-passat-b1.jpg?alt=media&token=934750e8-b1c8-4f6b-87d2-23ea76328865'});
    // tslint:disable-next-line:max-line-length
    this.carList.push({mark: 'Volkswagen', model: 'Passat B8', productionYear: 'od 2014', fuelTank: 70, designer: null, image: 'https://firebasestorage.googleapis.com/v0/b/cars-7bb35.appspot.com/o/volkswagen-passaatB8.jpg?alt=media&token=de2ad730-0b55-4b91-9be1-29fa8703c34e'});
    // tslint:disable-next-line:max-line-length
    this.carList.push({mark: 'Toyota', model: 'Corolla Verso II', productionYear: '2004-2009', fuelTank: 55, designer: null, image: 'https://firebasestorage.googleapis.com/v0/b/cars-7bb35.appspot.com/o/toyota-corollaVersoII.JPG?alt=media&token=0b6cefc2-0baf-4797-aab7-674b85e8d619'}); 
  }

  ngOnInit() {
  }

  onAddCar() {
    this.carList.push( this.newCar );
  }

}
