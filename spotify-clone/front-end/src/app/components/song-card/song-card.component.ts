import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-song-card',
  standalone: true,
  imports: [],
  templateUrl: './song-card.component.html',
  styleUrl: './song-card.component.scss'
})
export class SongCardComponent {
  @Input() public playlistThumbnail!:string;
  @Input() public title!:string;
  @Input() public description!:string;
  @Input() public song_id!: string | number;
  constructor(private router: Router) {}

  onNavigateToSong() {
    this.router.navigateByUrl(`/song/${this.song_id}`);
  }
}
