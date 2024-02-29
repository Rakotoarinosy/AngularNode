import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss'
})
export class TopNavComponent {
  public isSearchFieldVisible: boolean = false;

  constructor(private router: Router){
  }

  onNavigateToLogin() {
    this.router.navigate(['/','login']);
  }
}
