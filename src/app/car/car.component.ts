import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input() carItem: {mark: String, model: String, productionYear: String, fuelTank: Number, designer: String, image: String};
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
