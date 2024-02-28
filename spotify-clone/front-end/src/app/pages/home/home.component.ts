import { Component } from '@angular/core';
import { TopNavComponent } from "../../components/top-nav/top-nav.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [TopNavComponent]
})
export class HomeComponent {

}
