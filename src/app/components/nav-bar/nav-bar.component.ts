import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  items: MenuItem[] | undefined

  ngOnInit(){
    this.items = [
      {
        label: 'File'
      },
    ]
  }
}
