import { Component} from '@angular/core';
import { ApiService } from '../services/users.service';
@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent {

 users: any[] = [];

  searchQuery: string = '';
  
  filteredUsers: any[]= [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getUsers().subscribe((data) => {
      this.users = data;

      this.filteredUsers = data;
    });
  }

}
