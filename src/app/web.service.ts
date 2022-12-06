import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core';

@Injectable()
export class WebService {

  constructor(private http: HttpClient) {
  }

  getVideos() {
    return this.http.get(`https://prod-09.centralus.logic.azure.com/workflows/393f7345e2494c0bb208f70b41281498/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=o_qJN7MJn_8CDUjTlWF0M1tqHW_08jqkI7mAp1o9ReA`)
  }

  postVideo(video: any, file: any) {
    let postUrl: string = "https://prod-16.centralus.logic.azure.com:443/workflows/6147787bc1554f7183d271a5a808d3ee/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=aXt3hU1AiFJM9KxGHukcWG0MYAvilomLwf1sJpGhl_4";
    let postData = new FormData();

    postData.append("FileName", video.FileName);
    postData.append("userID", video.userID);
    postData.append("userName", video.userName);
    postData.append("File", file);

    console.log("post data is: ", postData);

    return this.http.post<FormData>(postUrl, postData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );

  }
}