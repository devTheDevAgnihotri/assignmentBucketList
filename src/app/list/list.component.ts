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
    this.auth.showLists().subscribe((res)=>{      
      console.log(res['body']['result'])
      
      for(let i=0;i<5;i++){
        res['body']['result'][i]['bkt_image'] =  "https://images.woovly.com/w_200/" + res['body']['result'][i]['bkt_image'] ;
        this.lists.push(res['body']['result'][i]);
      }
    })
  }

  

  //button function to get the url when clicked


}