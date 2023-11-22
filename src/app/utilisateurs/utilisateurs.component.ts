import { Component} from '@angular/core';
import { ApiService } from '../services/users.service';
@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent {

  posts: any[] = [];
  nouvelArticle = { title: '', body: '' };
  isAjoutModalOuvert = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPosts().subscribe((data) => {
      this.posts = data;
      console.log(this.posts);
    });
  }

  archiveUser() {
    alert('Bonjour');
  }

  ouvrirAjoutModal() {
    this.isAjoutModalOuvert = true;
  }

  fermerAjoutModal() {
    this.isAjoutModalOuvert = false;
  }

  ajouterArticle() {
    const titreTemporaire = this.nouvelArticle.title;
    const contenuTemporaire = this.nouvelArticle.body;

    this.apiService.ajouterArticle(this.nouvelArticle).subscribe((response: any) => {
      console.log('Réponse du service après ajout d\'article :', response);
      this.posts.push(response); // Ajouter le nouvel article à la liste existante
      this.fermerAjoutModal(); // Fermer le modal

      // Réinitialiser les champs en utilisant les valeurs temporaires
      this.nouvelArticle = { title: '', body: '' };
    });

    // Afficher les valeurs pour le débogage
    console.log('Valeurs après ajout :', titreTemporaire, contenuTemporaire);
  }



  }

