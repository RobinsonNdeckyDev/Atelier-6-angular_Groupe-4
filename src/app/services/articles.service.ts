import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private baseUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrl}/posts`);
}

// Archiver un post par son ID
  archivePost(postId: number): Observable<any> {
    const url = `${this.baseUrl}/${postId}`;
    return this.http.delete(url);
  }

}


// Récupérer un article par son ID
//   getArticleById(postId: number): Observable<any> {
//     const url = `${this.baseUrl}/${postId}`;
//     return this.http.get<any>(url);
//     console.log(url);
//   }

//   Archiver un article
//   archiveArticle(postId: number): Observable<any> {
//     const url = `${this.baseUrl}/${postId}`;
//     return this.http.delete(url);
//   }