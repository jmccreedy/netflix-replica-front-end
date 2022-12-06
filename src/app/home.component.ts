import {Component} from '@angular/core';
import {WebService} from "./web.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedFile = null;
  title = 'angular_app';
  videoForm: any;

  constructor(public webService: WebService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.videoForm = this.formBuilder.group({
        FileName: ['', Validators.required],
        userID: ['', Validators.required],
        userName: ['', Validators.required],
        UpFile: ['', Validators.required],
        title: ['', Validators.required],
        publisher: ['', Validators.required],
        producer: ['', Validators.required],
        genre: ['', Validators.required],
        ageRating: ['', Validators.required],

      }
    )
  }

  onFileSelected(event: any){
    this.selectedFile = event.target.files[0]
  }

  onSubmit() {
    console.log(this.videoForm)
    this.webService.postVideo(this.videoForm, this.selectedFile)
  }

}
