import { Component} from '@angular/core';
import { UtilisateursService } from '../services/utilisateurs.service';
@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent {

  utilisateurs: any[]= [];

  constructor(private utilisateursService: UtilisateursService){}

  ngOnInit(): void {
    
    this.utilisateursService.getUsers().subscribe((data) => {
      this.utilisateurs = data;
      console.log(this.utilisateurs);

      // Stocker les données dans le localStorage
      localStorage.setItem('Utilisateurs', JSON.stringify(this.utilisateurs));
    })
    
  }
}
