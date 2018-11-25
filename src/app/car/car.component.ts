import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  mark: string = "Volkswagen";
  model: string = "Passat B1";
  productionYear: string = "1987-1992";

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
  }
}
