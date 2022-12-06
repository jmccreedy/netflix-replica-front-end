import {Component} from '@angular/core';
import {WebService} from "./web.service";

@Component({
  selector: 'videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent {
  title = 'angular_app';
  videoList: any = [];
  blobAccount: any;

  constructor(public webService: WebService) {
  }

  ngOnInit() {
    this.videoList = this.webService.getVideos()
  }

  getVideoTag(filePath: string){
    let blobAccount: string = "https://netflixreplica.blob.core.windows.net"
    return blobAccount + filePath
  }

}
