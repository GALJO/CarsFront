import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent {

  constructor(public authService: AuthService) {

  }

  title: String = 'Carspedia';
  version: String = '0.2 Open Beta';

  getVersion() {
    return this.version;
  }

  getTitle() {
    return this.title;
  }

}
