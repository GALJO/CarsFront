import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  mark: String = 'Volkswagen';
  model: String = 'Passat B1';
  productionYear: String = '1973-1977';
  fuelTank: String = '45l';
  designer: String = 'Giorgetto Giugiaro';

  showMoreInfo: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onEdit() {
    console.log('Edit');
  }

  onDelete() {
    console.log('Delete');
  }

  onMoreInfo() {
    console.log('More Info');
    this.showMoreInfo = !this.showMoreInfo;
  }

}
