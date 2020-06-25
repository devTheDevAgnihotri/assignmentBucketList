import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  url = "https://www.woovly.com/exploreBucketList";      //root API url

 detailurl = "";                                   //Global variable to get the api url from button onclick

  showLists(){
    return this.http.get(this.url);               //returning the pokemon list url
  }

  
}
