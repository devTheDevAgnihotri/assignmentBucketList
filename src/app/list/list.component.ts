import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public auth: AuthService) { }

  lists:any[] = [];

  ngOnInit(): void {
    // this.auth.showLists().subscribe((res)=>{      
    //   console.log(res["results"])
    //   //to display 20 pokemon lists
    //   for(let i=0;i<5;i++){
    //     this.lists.push(res["results"][i]);
    //   }
    // })
    this.showLists();
  }

  async showLists(url = 'https://www.woovly.com/exploreBucketList', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'include', // include, *same-origin, omit
      headers: {
        // 'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        "accept": "*/*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
       "content-type": "application/json;charset=UTF-8",
      "sec-fetch-dest": "empty",
       "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE0Njc1NjY5MjAwMDI4MzQiLCJpYXQiOjE1OTI5MTkxNjl9.KpxHpFAUEILbg_V1JsYARn7tXL2LDDCMTiD60qrfNT0",
       "x-key": "1467566920002834"
      },
      referrer: "https://www.woovly.com/bucket-list",
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer-when-downgrade', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    console.log(response.json());
    return response.json(); // parses JSON response into native JavaScript objects
  }

  
 }
