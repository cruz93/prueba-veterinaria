import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from '../interfaces/quotes.interface';

@Injectable({
  providedIn: 'root'
})
export class QuotesServiceService {

  constructor(private http: HttpClient) { }

  getQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>('http://localhost:8080/api/quotes/all');
  }

  saveQuote(quote: Quote): Observable<Quote> {
    console.log(quote);
    return this.http.post<Quote>('http://localhost:8080/api/quotes/save', quote);
  }

  deleteQuote(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/api/quotes/${id}`);
  }

}
