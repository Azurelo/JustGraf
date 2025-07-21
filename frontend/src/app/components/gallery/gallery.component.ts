import { Component, OnInit } from '@angular/core';
import { GraffitiService } from '../../services/graffiti.service';
import { Graffiti } from '../../models/graffiti.model';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  graffitiList: Graffiti[] = [];

  constructor(private graffitiService: GraffitiService) { }

  ngOnInit(): void {
    this.graffitiService.getGraffiti().subscribe(data => {
      this.graffitiList = data.reverse(); // most recent first
    });
  }
}
