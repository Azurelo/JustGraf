import { Component } from '@angular/core';
import { GraffitiService } from '../../services/graffiti.service';
import { Graffiti } from '../../models/graffiti.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-graffiti-form',
  templateUrl: './graffiti-form.component.html',
  styleUrls: ['./graffiti-form.component.css']
})
export class GraffitiFormComponent {
  graffiti: Graffiti = {
    title: '',
    artist: '',
    location: '',
    imageUrl: '',
    description: '',
    likes: 0,
    dislikes: 0
  };

  constructor(
    private graffitiService: GraffitiService,
    private router: Router
  ) {}

  submitGraffiti() {
    this.graffitiService.addGraffiti(this.graffiti).subscribe(() => {
      alert('Graffiti submitted!');
      this.router.navigate(['/']); 
    });
  }
}
