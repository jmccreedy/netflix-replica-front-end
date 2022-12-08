import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core';

@Injectable()
export class WebService {

  constructor(private http: HttpClient) {
  }

  getVideos() {
    return this.http.get(`https://prod-09.centralus.logic.azure.com/workflows/393f7345e2494c0bb208f70b41281498/triggers/manual/paths/invoke/rest/v1/videos?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=o_qJN7MJn_8CDUjTlWF0M1tqHW_08jqkI7mAp1o9ReA`)
  }

  getUsers() {
    return this.http.get(`https://prod-20.centralus.logic.azure.com:443/workflows/17cf7938754a4d0cbdf462495522a6ac/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=rYDTnrnHOOwlk84XqPleyAB1JEUPlU0WAuaHjEVm3eI`)

  }

  getVideo(id: any){
    return this.http.get(`https://prod-04.centralus.logic.azure.com/workflows/bd134140ded9448fb10e115eb74d1559/triggers/manual/paths/invoke/rest/v1/videos/${id}?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=iSwzUhYRBsgdHUIiHdMsxBE_iu-sW2Brn00_-DsjR44`)
  }

  postVideo(video: any, file: any) {
    let postUrl: string = "https://prod-16.centralus.logic.azure.com:443/workflows/6147787bc1554f7183d271a5a808d3ee/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=aXt3hU1AiFJM9KxGHukcWG0MYAvilomLwf1sJpGhl_4";
    let postData = new FormData();

    postData.append("userID", video.get('userID').value);
    postData.append("userName", video.get('userName').value);
    postData.append("title", video.get('title').value);
    postData.append("publisher", video.get('publisher').value);
    postData.append("producer", video.get('producer').value);
    postData.append("genre", video.get('genre').value);
    postData.append("ageRating", video.get('ageRating').value);
    postData.append("File", file);

    console.log("post data is: ", postData);

    return this.http.post<FormData>(postUrl, postData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );

  }

  postComment(comment: any, id: any){
    let putUrl: string = "https://prod-31.centralus.logic.azure.com:443/workflows/b9400c7baa31438183a2ec076128a7dd/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=8QRHnM9KIJZFSFGl4WSbWr9VsSJJ_UNjOqoySXf9jP8";

    let putData = new FormData();

    putData.append("comments", comment.get('comment').value);
    putData.append("ratings", comment.get('rating').value);
    putData.append("id", id);

    return this.http.put<FormData>(putUrl, putData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );

  }
}
