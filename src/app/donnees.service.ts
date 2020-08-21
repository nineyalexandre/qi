import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DonneesService {

  constructor() { }

  panier: {
    articles: {
      id: string,
      qte: number
    }[],
    prenom: string
  };

  creerPanier(articles: Array<{ id: string, qte: number }>, prenom: string) {
    this.panier = { articles: articles, prenom: prenom };
  }


}
