import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SkillData } from './skilldata';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) {
    // this.getJSON().subscribe(data => {
    //   console.log(data);
    // });
  }

  public getJSON() {
    return this.http.get<SkillData[]>("assets/data/skilldata.json");
  }
}
