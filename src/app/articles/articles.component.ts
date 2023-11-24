import { Component } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { DataService } from '../services/data.service';
import { StorageService } from '../services/storage.service';
import { take } from 'rxjs/operators'; // Ajouter cette importation

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
  nouveauPost: any = { title: '', body: '' }; // Modèle pour le nouveau post
  postEnEdition: any = null; // 

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

  getLastPostId(): number {
    return this.posts.length > 0 ? this.posts[0].id : 0;
  }


  ajouterPost() {
    // Utilisez le service pour ajouter le nouveau post
    this.articlesService.ajouterPost(this.nouveauPost).subscribe((response) => {
      this.filteredPosts.unshift(response); // Ajouter également au début de la liste filtrée
      this.nouveauPost = { title: '', body: '' }; // Réinitialisez le modèle du formulaire
      this.searchArticles(); // Mettez à jour la liste filtrée si nécessaire
    });
  }


  // Nouvelle méthode pour commencer l'édition d'un post
  commencerEdition(post: any) {
    this.postEnEdition = { ...post }; // Créer une copie du post pour éviter les modifications directes
  }

  // Nouvelle méthode pour annuler l'édition d'un post
  annulerEdition() {
    this.postEnEdition = null;
  }


  enregistrerEdition() {
    // Appeler le service pour mettre à jour le post dans l'API
    this.articlesService.mettreAJourPost(this.postEnEdition).subscribe(() => {
      // Mettre à jour le post dans la liste locale
      const index = this.posts.findIndex(post => post.id === this.postEnEdition.id);
      if (index !== -1) {
        this.posts[index] = { ...this.postEnEdition };
      }

      // Mettre à jour le post dans la liste filtrée
      const filteredIndex = this.filteredPosts.findIndex(post => post.id === this.postEnEdition.id);
      if (filteredIndex !== -1) {
        this.filteredPosts[filteredIndex] = { ...this.postEnEdition };
      }

      // Annuler le mode d'édition
      this.postEnEdition = null;
    });
  }


  // this.posts.push(response); 
  // Ajoutez le nouveau post à la liste
  //  this.posts.unshift(response); 
   // Ajouter le nouveau post au début de la liste


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

  onInputChange(event: any) {
    // Appeler la recherche lors de la saisie
    this.searchQuery = event.target.value;
    this.searchArticles();
  }



  // archiver un post
  deletePost(postId: number) {
  console.log('Avant la suppression :', this.posts.map(post => post.id));
  this.articlesService.deletePost(postId).subscribe(() => {
    this.posts = this.posts.filter(post => post.id !== postId);
    console.log('Après la suppression :', this.posts.map(post => post.id));

    // Ne pas réinitialiser le composant ici
    // this.ngOnInit();
    
    // Mettez à jour le Local Storage après la suppression
    localStorage.setItem('Posts', JSON.stringify(this.posts));

    // Afficher les données actuelles dans le composant
    console.log('Données dans le composant :', this.posts.map(post => post.id));
    console.log('Données filtrées dans le composant :', this.filteredPosts.map(post => post.id));
  });
  }



  // Detail d'un article
  detailArticle(paramPost: any) {
    this.currentArticle = this.posts.find((item:any)=> item.id==paramPost)
    console.log(this.currentArticle);
  }

  

}
