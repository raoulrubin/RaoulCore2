import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SkillData } from '../models/skill-data';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) {
  }

  public getJSON() {
    return this.http.get<SkillData[]>("assets/data/skilldata.json");
  }
  
}
