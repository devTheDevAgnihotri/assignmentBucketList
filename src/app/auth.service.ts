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
    console.log(fetch('https://www.woovly.com/exploreBucketList'));
    return fetch('https://www.woovly.com/exploreBucketList');               
  }
// showLists(){
// //   let headers = new HttpHeaders({
// //     "accept": "*/*",
// //     "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
// //     "content-type": "application/json;charset=UTF-8",
// //     "sec-fetch-dest": "empty",
// //     "sec-fetch-mode": "cors",
// //     "sec-fetch-site": "same-origin",
// //     "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE0Njc1NjY5MjAwMDI4MzQiLCJpYXQiOjE1OTI5MTkxNjl9.KpxHpFAUEILbg_V1JsYARn7tXL2LDDCMTiD60qrfNT0",
// //     "x-key": "1467566920002834",
// //   "referrer": "https://www.woovly.com/bucket-list",
// //   "referrerPolicy": "no-referrer-when-downgrade",
// //    "method": "POST",
// //    });
// //    let options = {
// //      headers: headers,  withCredentials :true  , observe: 'response' as 'body'}
// //      return this.http.post('https://www.woovly.com/exploreBucketList',{},
// // // "{\"uid\":\"1467566920002834\",\"st\":0,\"lt\":10,\"gridC\":5,\"gridW\":1560,\"tids\":\"\",\"cids\":\"11495794562314|@|71495794562314|@|11495794562315|@|41495794562315|@|11495794562308|@|21495794562315|@|71495794562316\",\"isutype\":\"\",\"str\":\"\",\"utyp\":\"\",\"isUFO\":0,\"bids\":[],\"flag\":\"1\"}", 
// //  options )



// }
  
}
