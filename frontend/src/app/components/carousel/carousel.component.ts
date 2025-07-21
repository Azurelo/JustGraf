import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  featuredGraffiti = [
    {
      title: 'Sunset Wall',
      imageUrl: 'https://i0.wp.com/thattravel.co.uk/wp-content/uploads/2023/12/image-19-1024x768-2.jpg?fit=1024%2C768&amp;ssl=1',
      artist: 'Nina',
      location: 'São Paulo'
    },
    {
      title: 'Industrial Snake',
      imageUrl: 'https://preview.redd.it/3ytsfmcd36441.jpg?width=640&crop=smart&auto=webp&s=eab071df579a5b0a7063a0cc628849649856abf2',
      artist: 'Rex',
      location: 'London'
    },
    {
      title: 'Color Burst',
      imageUrl: 'https://www.creativefabrica.com/wp-content/uploads/2023/05/29/Color-burst-background-306-Graphics-70863391-1.jpg',
      artist: 'Echo',
      location: 'Paris'
    }
  ];
}
