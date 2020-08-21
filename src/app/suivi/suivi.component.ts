import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as liste from 'src/assets/data/commandes.json'

@Component({
  selector: 'app-suivi',
  templateUrl: './suivi.component.html',
  styleUrls: ['./suivi.component.css']
})
export class SuiviComponent implements OnInit {
  constructor() { }

  numcde = new FormControl('');
  affResultat: boolean = false;

  commandes: any = (liste as any).articles;

  afficher() {
    this.affResultat = true;
  }

  ngOnInit(): void {

  }


}
