import {Component} from '@angular/core';
import {WebService} from "./web.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_app';
  videoList: any = [];
  blobAccount: any;

  constructor(public webService: WebService) {
  }
}
