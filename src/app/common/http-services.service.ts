import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../model/userModel';
@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {
  host:string = 'https://624587982cfed18817223a54.mockapi.io/';
  fetchUserUrl: string = '/users';
  fetchHackathonsUrl: string = "/post";
  updateHackacthonUrl: string = "api/mocks/624587982cfed18817223a55/resources/6245889c2cfed18817224c6c/data"; 

  constructor(private http: HttpClient) { }

  searchData(){
    return this.http.get(`${this.host}${this.fetchUserUrl}`,{responseType: 'json'}).pipe(
        map((response:any) => response.map(item => item['user_id']))
      )
  }

  getHackathonData(){
    return this.http.get(`${this.host}${this.fetchHackathonsUrl}`,{responseType: 'json'})
  }

  // updateHackathonData(){
  //   return this.http.put(`${this.host}${this.updateHackacthonUrl}`,{responseType: 'json'},)
  // }
}
