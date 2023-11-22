import { Component } from '@angular/core';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  posts: any[] = [];

  filteredPosts: any[] = [];  // Ajout d'un tableau pour les articles filtrés
  searchQuery = '';

  constructor(private apiService: ArticlesService) {}

  ngOnInit() {
      this.apiService.getPosts().subscribe((data) => {
      this.posts = data;
      console.log(this.posts);

      this.filteredPosts = this.posts;  // Initialisez les articles filtrés avec tous les articles au début


       // Stocker les données dans le localStorage
      localStorage.setItem('Posts', JSON.stringify(this.posts));
    });
  }


  // Mettez à jour la liste des articles filtrés à chaque changement dans le champ de recherche
  searchArticles() {
    this.filteredPosts = this.posts.filter(post =>
      post.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      post.body.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }


  // Réinitialisez la liste des articles filtrés lorsque le champ de recherche est vide
  clearSearch() {
    this.searchQuery = '';
    this.filteredPosts = this.posts;
  }


  // Ajoutez cette méthode pour archiver un post
  archivePost(postId: number) {
    this.apiService.archivePost(postId).subscribe(
      (response: any) => {
        console.log('Post archivé avec succès', response);
        // Mettez à jour l'interface utilisateur si nécessaire
        // Vous pouvez également réactualiser la liste des posts après l'archivage
        this.filteredPosts = this.filteredPosts.filter(post => post.id !== postId);
      },
      (error: any) => {
        console.error('Erreur lors de l\'archivage du post', error);
      }
    );
  }
  
}
