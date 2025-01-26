import { Component } from '@angular/core';

@Component({
  selector: 'app-create-post',
  standalone: false,
  
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {

  selectedRating = 0;

  setRating(rating: number): void {
    this.selectedRating = rating;
    console.log(this.selectedRating);
  }

  getRating(): number {
    
    return this.selectedRating;
  }

  
}
