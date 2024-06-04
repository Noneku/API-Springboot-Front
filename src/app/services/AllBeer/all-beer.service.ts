import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AllBeerService {
  
  private apiUrl = 'http://localhost:8081/api/articles';

  constructor(private http: HttpClient) { }

   getArticles() {
    return this.http.get(this.apiUrl, {responseType: 'json'}).subscribe(res => {
    });
  }
}
