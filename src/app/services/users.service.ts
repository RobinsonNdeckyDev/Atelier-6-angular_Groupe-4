import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  archiveArticle(articleId: number) {
    throw new Error('Method not implemented.');
  }
  
  private baseUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrl}/posts`);
}

}