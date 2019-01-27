import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent {

  title: String = 'Carspedia';
  version: String = '0.1 Beta';

  getVersion() {
    return this.version;
  }

  getTitle() {
    return this.title;
  }

}
