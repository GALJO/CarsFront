import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {CarService} from '../service/car.service';
import {Car} from '../model/car.model';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {

  car: Car;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private carService: CarService) { }


  ngOnInit() {
    this.getCar();
  }

  private getCar() {
    const id = this.route.snapshot.paramMap.get('id');
    this.car = this.carService.getCar(id);
  }

  goBack(): void {
    this.location.back();
  }

}
