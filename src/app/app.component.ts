import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ArrayAllBeersComponent } from './components/array-all-beers/array-all-beers.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, ArrayAllBeersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'API-SpringBoot-Front';
}
