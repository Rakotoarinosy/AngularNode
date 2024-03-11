import { Component } from '@angular/core';
import { TopNavComponent } from "../../components/top-nav/top-nav.component";
import { SongCardComponent } from "../../components/song-card/song-card.component";
import { CommonModule } from '@angular/common';
import { SearchBarService } from '../../services/searchbar.service';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [TopNavComponent, SongCardComponent,CommonModule,RouterLink]
})
export class HomeComponent {
  public songCards = [
    { song_id:1,
      thumbnail:
      'https://upload.wikimedia.org/wikipedia/commons/e/e8/Music_01754.jpg',
      title: 'REgional Songs',
      description: 'Relax and inculge with beautiful piano',
      song_link: '../../../assets/Ma_woman .mp3'
    },
    { song_id:2,
      thumbnail:
      'https://upload.wikimedia.org/wikipedia/commons/e/e8/Music_01754.jpg',
      title: 'REgional Songs',
      description: 'Relax and inculge with beautiful piano',
      song_link: '',
    },
    { song_id:3,
      thumbnail:
      'https://upload.wikimedia.org/wikipedia/commons/e/e8/Music_01754.jpg',
      title: 'REgional Songs',
      description: 'Relax and inculge with beautiful piano',
      song_link: '',
    },
    { song_id: 4,
      thumbnail:
      'https://upload.wikimedia.org/wikipedia/commons/e/e8/Music_01754.jpg',
      title: 'REgional Songs',
      description: 'Relax and inculge with beautiful piano',
      song_link: '',
    },
    { song_id: 5,
      thumbnail:
      'https://upload.wikimedia.org/wikipedia/commons/e/e8/Music_01754.jpg',
      title: 'REgional Songs',
      description: 'Relax and inculge with beautiful piano',
      song_link: '',
    },
    {song_id: 6,
      thumbnail:
      'https://upload.wikimedia.org/wikipedia/commons/e/e8/Music_01754.jpg',
      title: 'REgional Songs',
      description: 'Relax and inculge with beautiful piano',
      song_link: '',
    },
    { song_id:7,
      thumbnail:
      'https://upload.wikimedia.org/wikipedia/commons/e/e8/Music_01754.jpg',
      title: 'REgional Songs',
      description: 'Relax and inculge with beautiful piano',
      song_link: '',
    },
  ];

  constructor(public sb: SearchBarService, private router:Router){}

  onNavigation(pageName: string) {
    if(pageName === 'search') {
      this.sb.isSearchVisible.next(true);
    } else {
      this.sb.isSearchVisible.next(false);
    }
  }

  onNavigateToSong(song: any) {
    this.router.navigate(['/', 'song', '/', 'song.song_id'])
  }
}
