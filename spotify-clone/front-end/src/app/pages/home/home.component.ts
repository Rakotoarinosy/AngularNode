import { Component } from '@angular/core';
import { TopNavComponent } from "../../components/top-nav/top-nav.component";
import { SongCardComponent } from "../../components/song-card/song-card.component";
import { CommonModule } from '@angular/common';
import { SearchBarService } from '../../services/searchbar.service';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [TopNavComponent, SongCardComponent,CommonModule]
})
export class HomeComponent {
  public songCards = [
    {
      thumbnail:
      'https://upload.wikimedia.org/wikipedia/commons/e/e8/Music_01754.jpg',
      title: 'REgional Songs',
      description: 'Relax and inculge with beautiful piano',
    },
    {
      thumbnail:
      'https://upload.wikimedia.org/wikipedia/commons/e/e8/Music_01754.jpg',
      title: 'REgional Songs',
      description: 'Relax and inculge with beautiful piano',
    },
    {
      thumbnail:
      'https://upload.wikimedia.org/wikipedia/commons/e/e8/Music_01754.jpg',
      title: 'REgional Songs',
      description: 'Relax and inculge with beautiful piano',
    },
    {
      thumbnail:
      'https://upload.wikimedia.org/wikipedia/commons/e/e8/Music_01754.jpg',
      title: 'REgional Songs',
      description: 'Relax and inculge with beautiful piano',
    },
    {
      thumbnail:
      'https://upload.wikimedia.org/wikipedia/commons/e/e8/Music_01754.jpg',
      title: 'REgional Songs',
      description: 'Relax and inculge with beautiful piano',
    },
    {
      thumbnail:
      'https://upload.wikimedia.org/wikipedia/commons/e/e8/Music_01754.jpg',
      title: 'REgional Songs',
      description: 'Relax and inculge with beautiful piano',
    },
    {
      thumbnail:
      'https://upload.wikimedia.org/wikipedia/commons/e/e8/Music_01754.jpg',
      title: 'REgional Songs',
      description: 'Relax and inculge with beautiful piano',
    },
  ];

  constructor(private sb: SearchBarService){}

  onNavigation(pageName: string) {
    if(pageName === 'search') {
      this.sb.isSearchVisible.next(true);
    } else {
      this.sb.isSearchVisible.next(false);
    }
  }
}
