import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class ExpTable{
  rarities: Rarity[];
}

export class Rarity{
  id: string;
  name: string;
  experiencePoints: ExperiencePoint[];
  levelCap: LevelCap;
}

export class ExperiencePoint{
  level: number;
  totalExp: number;
}

export class LevelCap{
  born: number;
  cc: number;
  awaken1: number;
  awaken2: number;
  max: number;
}

export class ExpUnits{
  armors: ExpUnit[];
  spirits: ExpUnit[];
}

export class ExpUnit{
  id: number;
  order: number= 0;
  name: string;
  exp: number;
  summary: string= "";
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class AigisExpCalcService {

  constructor(private http: HttpClient) { }

  getExpTable(): Observable<ExpTable>{
    const url = 'assets/exp-table.json'
    return this.http.get<ExpTable>(url);
  }

  getExpUnits(): Observable<ExpUnits>{
    const url = 'assets/exp-units.json'
    return this.http.get<ExpUnits>(url);
  }
}
