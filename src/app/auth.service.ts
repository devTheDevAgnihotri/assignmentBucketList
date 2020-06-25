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


   let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://www.woovly.com'
        
     });
     let options = {
        headers: headers,  withCredentials :false  , observe: 'response' as 'body'}
      
      return this.http.post(this.url, "{}",  options )}

    //return this.http.get(this.url);               //returning the pokemon list url
  

  
}