import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DonneesService } from '../donnees.service';

@Component({
  selector: 'app-commander',
  templateUrl: './commander.component.html',
  styleUrls: ['./commander.component.css']
})
export class CommanderComponent implements OnInit {
  
  panier: Array<{
    id: string,
    qte: number
  }> = [];
  prenom: string;

  constructor(private donneesService : DonneesService, private router : Router) { }

  resumecde = new FormGroup({
    id: new FormControl(''),
    qte: new FormControl(''),
    prenom: new FormControl(''),
    });

  ajoutPanier(){
  this.panier.push({ id: this.resumecde.get("id").value, qte: this.resumecde.get("qte").value });
  }

  onSubmit() {
    this.donneesService.creerPanier(this.panier, this.resumecde.get("prenom").value);
    this.router.navigate(['/paiement'])
  }
  ngOnInit(): void {
  }

}
