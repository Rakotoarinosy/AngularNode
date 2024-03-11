import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SongDataService } from '../../services/song-data.service';

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
  @Input() public link!:string;
  @Input() public song_id!: string | number;
  constructor(private router: Router, private sd: SongDataService) {}

  onNavigateToSong() {
    // this.sd.songData.next({
    this.router.navigateByUrl(`/song/${this.song_id}`, {
    state: {
      thumbnail: this.playlistThumbnail,
      title: this.title,
      description: this.description,
      link: this.link
    },
    });
  }
}
