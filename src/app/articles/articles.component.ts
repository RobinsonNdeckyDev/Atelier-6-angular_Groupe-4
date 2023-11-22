import { Component } from '@angular/core';
import { ApiService } from '../services/users.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
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
