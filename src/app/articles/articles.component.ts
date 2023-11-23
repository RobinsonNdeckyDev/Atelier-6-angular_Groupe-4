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

  currentArticle: any;

  filteredPosts: any[] = [];  // Ajout d'un tableau pour les articles filtrés
  searchQuery = '';

  constructor(private articlesService: ArticlesService, private dataService: DataService, private storageService: StorageService) {}

  ngOnInit() {
      this.articlesService.getPosts().subscribe((data) => {
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


  // Réinitialisez la liste des articles filtrés lorsque le champ de recherche est vide
  clearSearch() {
    this.searchQuery = '';
    this.filteredPosts = this.posts;
  }

 

  deletePost(postId: number) {
    this.articlesService.deletePost(postId).subscribe(() => {
      // Supprimer le post de la liste locale
      this.posts = this.posts.filter(post => post.id !== postId);
      
    });
  }


  detailArticle(paramPost: any) {
    this.currentArticle = this.posts.find((item:any)=> item.id==paramPost)
    console.log(this.currentArticle);
  }

  

}
