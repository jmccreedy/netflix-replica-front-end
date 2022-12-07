import {Component} from '@angular/core';
import {WebService} from "./web.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent {
  title = 'angular_app';
  videoList: any = [];
  commentForm: any;
  blobAccount: any;

  constructor(public webService: WebService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.videoList = this.webService.getVideos()
<<<<<<< Updated upstream
    this.blobAccount = "https://netflixreplica.blob.core.windows.net";
=======

    this.commentForm = this.formBuilder.group({
        comment: ['', Validators.required],
        rating: ['', Validators.required]
      }
    )
  }

  onSubmit(id:any) {
    this.webService.postComment(this.commentForm, id)
>>>>>>> Stashed changes
  }

  getVideoTag(filePath: string){
    let blobAccount: string = "https://netflixreplica.blob.core.windows.net"
    return blobAccount + filePath
  }

}
