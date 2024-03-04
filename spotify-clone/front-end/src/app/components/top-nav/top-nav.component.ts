import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchBarService } from '../../services/searchbar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss'
})
export class TopNavComponent implements OnInit {


  public isSearchFieldVisible: boolean = false;

  constructor(private router: Router, private sb: SearchBarService){}

  ngOnInit() {
    this.sb.isSearchVisible.subscribe(status => {
      this.isSearchFieldVisible = status;
    });
  }

  onNavigateToLogin() {
    this.router.navigate(['/','login']);
  }
}
