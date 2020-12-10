import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {StarWarsResponse} from '../interfaces/starWars-response.interface';

const starWarsBaseUrl =  'https://swapi.dev/api/films/';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  constructor(private http: HttpClient) { }

  public getStarWarsList(): Observable<StarWarsResponse>{
    return this.http.get<StarWarsResponse>(starWarsBaseUrl)
  }
}
