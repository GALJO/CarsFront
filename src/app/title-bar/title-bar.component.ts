import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent {

  title: string = 'Carspedia';
  version: number = 0.5;

  getVersion() {
    return this.version;
  }

  getTitle() {
    return this.title;
  }

}
