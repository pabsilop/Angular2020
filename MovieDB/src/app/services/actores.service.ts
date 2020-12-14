import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActoresResponse } from '../interfaces/actores-response.interface'

const peliculasURL = 'https://api.themoviedb.org/3/person'
const apiKey = '45afb6fc66ef91033c214a30d0fefdf1'

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  constructor(private http: HttpClient) { }

  public getActoresList(): Observable<ActoresResponse>{
    return this.http.get<ActoresResponse>(peliculasURL+'/popular?api_key=' + apiKey,)
  }
}
