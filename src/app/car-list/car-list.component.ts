import {Component, OnInit} from '@angular/core';
import {Car} from '../model/car.model';
import {Guid} from '../utils/guid';
import {CarService} from '../service/car.service';

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
    this.initCarList();
    this.carService.carListChanged.subscribe(
      () => this.initCarList()
    );
  }

  private initCarList(): void {
    this.carService.getCarList().subscribe(
      cl => this.carList = cl
    );
  }

  onAddCar() {
    this.newCar.id = Guid.newGuid();
    this.carList.push( this.newCar );
  }

  onSortByMark() {
    this.carList = this.carList.sort((c1: Car, c2: Car) => c1.mark < c2.mark ? -1 : 1);
  }

  onSortByCapacity() {
    this.carList = this.carList.sort((c1: Car, c2: Car) =>
      (c1.capacity === undefined ? Number.MAX_VALUE : c1.capacity) < (c2.capacity === undefined ? Number.MAX_VALUE : c2.capacity) ? -1 : 1);
  }

  onSortByIsMarked() {
    this.carList = this.carList.sort(
      (c1: Car, c2: Car) => {
        const c1Marked = c1.isMarked === undefined ? false : c1.isMarked;
        const c2Marked = c2.isMarked === undefined ? false : c2.isMarked;
        if (c1Marked === c2Marked) {
          return c1.mark < c2.mark ? -1 : 1;
        } else if (c1Marked > c2Marked) {
          return -1;
        } else {
          return 1;
        }
      });
  }

  onFilterByTag(name: string) {
    this.carService.getCarList().subscribe(cl => {
      if (name === '') {
        this.carList = cl;
      } else {
        this.carList = cl.filter(c => c.carTag.find(t => t === name));
      }
    });
  }

}
