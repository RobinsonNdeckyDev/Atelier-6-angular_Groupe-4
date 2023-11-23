import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private baseUrl = 'https://jsonplaceholder.typicode.com';
  apiUrl: any;

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrl}/posts`);
}

// Supprimer un post par son ID
  deletePost(postId: number): Observable<any> {
    const url = `${this.baseUrl}/posts/${postId}`; // Correction ici
    return this.http.delete<any>(url);
  }


}

