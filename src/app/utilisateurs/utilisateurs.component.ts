import { Component} from '@angular/core';
import { ApiService } from '../users.service';
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

  

  // searchUsers() {
  //   this.apiService.searchUsers(this.searchQuery).subscribe((data) => {
  //     this.filteredUsers = data;
  //   });
  // }
}
