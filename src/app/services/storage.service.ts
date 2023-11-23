import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  private storageKey = 'archivedPosts';

  getArchivedPosts(): any[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
    // console.log(this.storageKey);
  }

  archivePost(post: any): void {
    const archivedPosts = this.getArchivedPosts();
    archivedPosts.push(post);
    localStorage.setItem(this.storageKey, JSON.stringify(archivedPosts));
    // console.log(archivedPosts);
  }

  removeArchivedPost(post: any): void {
    const archivedPosts = this.getArchivedPosts();
    const updatedPosts = archivedPosts.filter((p: any) => p.id !== post.id);
    localStorage.setItem(this.storageKey, JSON.stringify(updatedPosts));
  }

}
