import { Component, OnInit } from '@angular/core';
import { SongDataService } from '../../services/song-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-song',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './song.component.html',
  styleUrl: './song.component.scss'
})
export class SongComponent implements OnInit{
  public songData!: any;
  constructor(
    private sd: SongDataService,
    private route: Router,
    private activeRoute: ActivatedRoute
    ){}

  ngOnInit(): void {
    this.activeRoute.params
    .pipe(map((d) => window.history.state))
    .subscribe(data => this.songData = data);
    if (this.songData?.link === '') {
      this.route.navigate(['/']);
    }
  }
}
