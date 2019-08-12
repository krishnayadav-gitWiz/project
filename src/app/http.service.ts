import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements OnInit {

  constructor( private http:HttpClient) { }

  ngOnInit() {
    
  }
  putUserInformation() {
  //  this.http.post("https://api.invidz.com/api/authenticate?email=mnbhardwaj888@gmail.com&password=manutest");
  }
}
