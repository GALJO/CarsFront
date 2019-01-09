import {EventEmitter, Injectable} from '@angular/core';
import {Car} from '../model/car.model';
import {Engine} from '../model/engine.model';
import {BodyType} from '../model/typeOfBody.model';
import {GearBox} from '../model/gearbox.model';
import {Guid} from '../utils/guid';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private carList: Car[];

  carListChanged = new EventEmitter<Car[]>();

  constructor() {
    this.initCarList();
  }

  public getCarList(): Car[] {
    return this.carList;
  }

  public deleteCar(carId: string): void {
    this.carList = this.carList.filter(c => carId !== c.id);
    this.emitCarListChanged();
  }

  public markCar(carId: string): void {
    const findedCar = this.carList.find(c => carId === c.id);
    findedCar.isMarked = !findedCar.isMarked;
    this.emitCarListChanged();
  }

  public sortCarListByMark(): void {
    this.carList = this.carList.sort((c1: Car, c2: Car) => c1.mark < c2.mark ? -1 : 1);
    this.emitCarListChanged();
  }

  public sortCarListByCapacity(): void {
    this.carList = this.carList.sort((c1: Car, c2: Car) => c1.capacity < c2.capacity ? -1 : 1);
    this.emitCarListChanged();
  }

  public sortCarListByMarked(): void {
    this.carList = this.carList.sort(
      (c1: Car, c2: Car) => {
        if (c1.isMarked === c2.isMarked) {
          return c1.mark < c2.mark ? -1 : 1;
        } else if (c1.isMarked > c2.isMarked) {
          return -1;
        } else {
          return 1;
        }
      });
    this.emitCarListChanged();
  }

  private emitCarListChanged(): void {
    this.carListChanged.emit(this.carList);
  }

  private initCarList(): void {
    // tslint:disable:max-line-length
    // Passat B1
    this.carList = [];
    this.carList.push( new Car(Guid.newGuid(), 'Volkswagen', ['Passat B1', 'Dasher'], '1973-1977', 45, 'Giorgetto Giugiaro', ['przedni'], 430, ['L', 'LS'],
      [
        new Engine([55], 'R4 1.3 55KM', 'benzyna'),
        new Engine([75], 'R4 1.5 75KM', 'benzyna'),
        new Engine([85], 'R4 1.5 85KM', 'benzyna')
      ], [ new GearBox([3], 'automatyczna'), new GearBox([4], 'manualna')],
      [
        new BodyType('500l', [2, 4], 'sedan', [5]),
        new BodyType('500l', [3, 5], 'hatchback', [5]),
        new BodyType('500l', [5], 'kombi', [5])
      ],
      'https://firebasestorage.googleapis.com/v0/b/cars-7bb35.appspot.com/o/volkswagen-passat-b1.jpg?alt=media&token=934750e8-b1c8-4f6b-87d2-23ea76328865'));
    // Passat B8
    this.carList.push( new Car(Guid.newGuid(), 'Volkswagen', ['Passat B8', 'Passat GT'], 'od 2014', 70, null, ['przedni', '4Motion'], null, ['Trendline', 'ComfortLine', 'HighLine', 'R-line', 'Alltrack'],
      [
        new Engine([125], '1.4 TSI BlueMotion', 'benzyna'),
        new Engine([150], '1.4 TSI ACT BlueMotion', 'benzyna'),
        new Engine([180], '1.8 TSI BlueMotion', 'benzyna')
      ], [ new GearBox([6], 'manualna'), new GearBox([6], 'automatyczna'), new GearBox([7], 'automatyczna')],
      [
        new BodyType('586l - 1152l', [4], 'sedan', [5]),
        new BodyType('650l - 1780l', [5], 'kombi', [5])
      ],
      'https://firebasestorage.googleapis.com/v0/b/cars-7bb35.appspot.com/o/volkswagen-passaatB8.jpg?alt=media&token=de2ad730-0b55-4b91-9be1-29fa8703c34e'));
    // Toyota Corolla Verso II
    this.carList.push( new Car(Guid.newGuid(), 'Toyota', ['Corolla Verso II'], '2004-2009', 55, null, null, 425, null,
      [
        new Engine([110], '1.6 110KM', 'benzyna'),
        new Engine([136], '1.8 136KM', 'benzyna'),
        new Engine([116], '1.0 D-4D 116KM', 'diesel')
      ], [ new GearBox([5], 'manualna')],
      [
        new BodyType('423l - 1563l', [5], 'minivan', [5, 7])
      ],
      'https://firebasestorage.googleapis.com/v0/b/cars-7bb35.appspot.com/o/toyota-corollaVersoII.JPG?alt=media&token=0b6cefc2-0baf-4797-aab7-674b85e8d619'));
    // Maserati Quattroporte VI
    this.carList.push( new Car(Guid.newGuid(), 'Maserati', ['Quattroporte VI'], 'od 2012', null, 'Lorenzo Ramaciotti', ['tylny', 'AWD'], null, ['Ermenegildo Zegna'],
      [
        new Engine([410], 'V6 3.0 TwinTurbo 410KM', 'benzyna'),
        new Engine([530], '3.8 V8 TwinTurbo 530KM', 'benzyna'),
        new Engine(null, 'V6 3.0 TwinTurbo', 'diesel')
      ], [ new GearBox([8], 'automatyczna')],
      [
        new BodyType(null, [4], 'sedan', [4])
      ],
      'https://firebasestorage.googleapis.com/v0/b/cars-7bb35.appspot.com/o/maserati-quattroporteVI.jpg?alt=media&token=0876ef36-ef4e-4186-ab4d-b2099106e879'));
  }
}
