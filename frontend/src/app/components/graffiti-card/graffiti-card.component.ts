import { Component, Input } from '@angular/core';
import { Graffiti } from '../../models/graffiti.model';
import { GraffitiService } from '../../services/graffiti.service';

@Component({
  selector: 'app-graffiti-card',
  templateUrl: './graffiti-card.component.html',
  styleUrls: ['./graffiti-card.component.css']
})
export class GraffitiCardComponent {
  @Input() graffiti!: Graffiti;

  liked = false;
  disliked = false;

  constructor(private graffitiService: GraffitiService) {}

  toggleLike() {
    if (!this.graffiti || !this.graffiti._id) return;

    if (this.liked) {
      this.graffiti.likes = (this.graffiti.likes ?? 1) - 1;
      this.liked = false;
    } else {
      this.graffiti.likes = (this.graffiti.likes ?? 0) + 1;
      this.liked = true;

      if (this.disliked) {
        this.graffiti.dislikes = (this.graffiti.dislikes ?? 1) - 1;
        this.disliked = false;
      }
    }

    this.graffitiService.updateGraffiti(this.graffiti._id, this.graffiti).subscribe();
  }

  toggleDislike() {
    if (!this.graffiti || !this.graffiti._id) return;

    if (this.disliked) {
      this.graffiti.dislikes = (this.graffiti.dislikes ?? 1) - 1;
      this.disliked = false;
    } else {
      this.graffiti.dislikes = (this.graffiti.dislikes ?? 0) + 1;
      this.disliked = true;

      if (this.liked) {
        this.graffiti.likes = (this.graffiti.likes ?? 1) - 1;
        this.liked = false;
      }
    }

    this.graffitiService.updateGraffiti(this.graffiti._id, this.graffiti).subscribe();
  }
}
