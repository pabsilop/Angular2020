import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BibliotecaResponse } from '../interfaces/biblioteca-response.interface';

const bibliotecaBaseUrl = 'http://www.bne.es/media/datosgob/dominiopublico/dominiopublico1939.json'

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  constructor(private http: HttpClient) { }

  public getBibliotecaList(): Observable<BibliotecaResponse>{
    return this.http.get<BibliotecaResponse>(bibliotecaBaseUrl)
  }
}
