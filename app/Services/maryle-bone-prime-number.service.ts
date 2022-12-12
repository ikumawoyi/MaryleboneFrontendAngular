import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MaryleBonePrimeNumberService {

  constructor(private httpClient: HttpClient) { }
  getPrimeNumbers(primeNumber: number): Observable<number[]>{
    console.log(primeNumber);
    console.log(environment.apiUrl + '/PrimeNumbers/' + primeNumber);
    return this.httpClient.get<number[]>(environment.apiUrl + '/PrimeNumbers/' + primeNumber)
  }
}
