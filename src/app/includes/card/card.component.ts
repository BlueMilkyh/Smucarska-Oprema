import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../model/post';

@Component({
  selector: 'app-card',
  standalone: false,

  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  PostsArray: Post[] = [];
  loopArray = new Array(5);
  constructor(private postService: PostsService) {
    this.getPosts();
  }

  ngOnInit(): void {
    console.log('ngOnInit is running!');
    console.log(this.PostsArray);
    // console.log(this.userRegister); // Check if this gets logged
  }

  getPosts() {
    this.PostsArray = this.postService.getPosts();
  }

  removePost(index: number) {
    this.postService.removePost(index);
    this.getPosts();
  }
}
