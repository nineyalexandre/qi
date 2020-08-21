import { Component, OnInit } from '@angular/core';
import { DonneesService } from '../donnees.service';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {

  lienInterac = "assets/images/interac-logo.png";

  constructor(private donneesService: DonneesService) { }

  prenom = this.donneesService.panier.prenom;
  articles = this.donneesService.panier.articles;

  ngOnInit(): void {
  }

}
