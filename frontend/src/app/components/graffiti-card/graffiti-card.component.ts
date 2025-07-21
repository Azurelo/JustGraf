import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Graffiti } from '../../models/graffiti.model';
import { GraffitiService } from '../../services/graffiti.service';

@Component({
  selector: 'app-graffiti-card',
  templateUrl: './graffiti-card.component.html',
  styleUrls: ['./graffiti-card.component.css']
})
export class GraffitiCardComponent {
  @Input() graffiti!: Graffiti;
  @Output() deleted = new EventEmitter<void>();
  liked = false;
  disliked = false;
  isEditing = false;
  editData: any = {};

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

  openEditModal() {
    this.editData = { ...this.graffiti };
    this.isEditing = true;
  }

  closeEditModal() {
    this.isEditing = false;
  }

  submitEdit() {
    if (!this.graffiti._id) return;

    this.graffitiService.updateGraffiti(this.graffiti._id, this.editData).subscribe((updated) => {
      Object.assign(this.graffiti, updated);
      this.closeEditModal();
    });
  }

  delete() {
    if (confirm('Are you sure you want to delete this graffiti?') && this.graffiti._id) {
      this.graffitiService.deleteGraffiti(this.graffiti._id).subscribe(() => {
        this.deleted.emit();
      });
    }
  }
}
