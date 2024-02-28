import { Component, Input } from '@angular/core';

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
}
