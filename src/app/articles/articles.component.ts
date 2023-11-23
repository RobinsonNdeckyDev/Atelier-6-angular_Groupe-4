import { Component } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { DataService } from '../services/data.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  providers: [StorageService]
})
export class ArticlesComponent {
  posts: any[] = [];

  filteredPosts: any[] = [];  // Ajout d'un tableau pour les articles filtrés
  searchQuery = '';

  constructor(private apiService: ArticlesService, private dataService: DataService, private storageService: StorageService) {}

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
      post.body.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      String(post.id).includes(this.searchQuery)
    );
  }

  // deletePost(postId: number) {
  //   this.apiService.deletePost(postId).subscribe(() => {
  //     Actualiser la liste des posts après la suppression
  //     this.ngOnInit();
  //   });
  // }


  deletePost(postId: number) {
    this.apiService.deletePost(postId).subscribe(() => {
      // Supprimer le post de la liste locale
      this.posts = this.posts.filter(post => post.id !== postId);
    });
  }


  // Réinitialisez la liste des articles filtrés lorsque le champ de recherche est vide
  clearSearch() {
    this.searchQuery = '';
    this.filteredPosts = this.posts;
  }


  

}
