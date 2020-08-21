import { Component, OnInit } from '@angular/core';
import * as liste from 'src/assets/data/bd.json'

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  constructor() { }

  articles: any = (liste as any).articles;


  ngOnInit(): void {
    console.log(this.articles);
  }

}
