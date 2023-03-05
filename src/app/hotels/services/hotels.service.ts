import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, tap, delay } from 'rxjs/operators';

import { Hotels } from './../model/hotels';

@Injectable({
  providedIn: 'root' //a instancia de hotel service fica disponível global
})
export class HotelsService {

  private readonly API = 'http://localhost:8080/hotels';
                          //http://localhost:8080/hotels & /assets/hotels.json


  httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  };




  constructor(private httpClient: HttpClient) { } //dep declarada

  list() {
    return this.httpClient.get<Hotels[]>(this.API)
    .pipe(
      first(),
      delay(700),
      tap(hotels => console.log(hotels))
    ); //Cano; Antes de eu retornar a informação final eu possa manupular essa informação de
       //maneira reativa com programação reativa usando operadores do RXJS para fazer essa manipulação
  }    //dados passam por esse cano, são manupulados e retornamos e no final retorna o
       //resultado final


       public postHotels(hotels: any): Observable<Hotels>{
         return this.httpClient.post<any>(this.API, hotels, this.httpOptions)

       }


}
