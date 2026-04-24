import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
  
})
export class AnimalService {
   apiUri = '/api/animals';
  constructor(private http: HttpClient){ 
    const httpOptions = new HttpHeaders().set('content-Type', 'application/json');
  }
 getAllAnimalsData(): Observable<any> {
return this.http.get<any>(this.apiUri)
}

}
