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

  ajouterPost(post: any): Observable<any> {
    // Vous devrez adapter cette méthode en fonction de votre API
    return this.http.post(`${this.baseUrl}/posts`, post);
  }

  // Supprimer un post par son ID
  deletePost(postId: number): Observable<any> {
    const url = `${this.baseUrl}/posts/${postId}`; // Correction ici
    return this.http.delete<any>(url);
  }

  // mise à jour de l'api
  mettreAJourPost(post: any): Observable<any> {
    // Vous devrez adapter cette méthode en fonction de votre API
    return this.http.put(`${this.baseUrl}/posts/${post.id}`, post);
  }


  getCommentsByArticleID(articleId: number): Observable<any[]> {
    const url = `${this.baseUrl}/posts/${articleId}/comments`;
    return this.http.get<any[]>(url);
  }

}

