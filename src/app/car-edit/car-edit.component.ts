import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {

  id: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getCar();
  }

  private getCar() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  goBack(): void {
    this.location.back();
  }

}
