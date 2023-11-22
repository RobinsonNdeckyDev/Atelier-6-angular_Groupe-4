import { Component} from '@angular/core';
import { ApiService } from '../services/users.service';
@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent {

  posts: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPosts().subscribe((data) => {
      this.posts = data;
      console.log(this.posts);
    });
  }


  archiveUser(){
    alert('Bonjour')
  }

}
