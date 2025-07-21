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

  constructor(private graffitiService: GraffitiService) {}

  like() {
    if (!this.graffiti || !this.graffiti._id) return;
    this.graffiti.likes = (this.graffiti.likes ?? 0) + 1;
    this.graffitiService.updateGraffiti(this.graffiti._id, this.graffiti).subscribe();
  }

  dislike() {
    if (!this.graffiti || !this.graffiti._id) return;
    this.graffiti.dislikes = (this.graffiti.dislikes ?? 0) + 1;
    this.graffitiService.updateGraffiti(this.graffiti._id, this.graffiti).subscribe();
  }
}
