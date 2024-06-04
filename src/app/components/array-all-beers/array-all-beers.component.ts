import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AllBeerService } from '../../services/AllBeer/all-beer.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-array-all-beers',
  standalone: true,
  imports: [TableModule, ButtonModule, CommonModule],
  templateUrl: './array-all-beers.component.html',
  styleUrl: './array-all-beers.component.css',
  providers: [AllBeerService]
})
export class ArrayAllBeersComponent {

  articles: any[] = [];
  constructor(private AllBeerService: AllBeerService){
    this.articles.push(AllBeerService.getArticles());

    console.log(this.articles);
  }
  
}
