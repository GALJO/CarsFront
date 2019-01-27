import {EventEmitter, Injectable} from '@angular/core';
import {Car} from '../model/car.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

const API_URL = 'https://cars-7bb35.firebaseio.com';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  carListChanged = new EventEmitter<void>();

  constructor(private httpClient: HttpClient) {}

  public getCarList(): Observable<Car[]> {
    return this.httpClient.get(`${API_URL}/cars.json`)
      .pipe(
        map(carObj => {
          const carArr: Car[] = [];
          for(const id in carObj) {
              carArr.push({id, ...carObj[id]});
          }
          return carArr;
        }));
  }

  public getCar(carId: string): Observable<Car> {
    return this.httpClient.get<Car>(`${API_URL}/cars/${carId}.json`)
      .pipe(map(c => {
        c.id = carId;
        return c;
      }));
  }

  public deleteCar(carId: string): void {
    // this.carList = this.carList.filter(c => carId !== c.id);
    this.emitCarListChanged();
  }

  public markCar(carId: string): void {
    this.getCar(carId).subscribe(c => {
      if(c.isMarked === undefined) {
        c.isMarked = false;
      }
      c.isMarked = !c.isMarked;
      this.httpClient.put(`${API_URL}/cars/${carId}.json`, c).subscribe(() => this.emitCarListChanged());
    });
  }

  private emitCarListChanged(): void {
    this.carListChanged.emit();
  }

}
