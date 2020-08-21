import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { ContactComponent } from './contact/contact.component';
import { CommanderComponent } from './commander/commander.component';
import { SuiviComponent } from './suivi/suivi.component';
import { PaiementComponent } from './paiement/paiement.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'articles', component: ArticlesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gérant', redirectTo: '/contact' },
  { path: 'commander', component: CommanderComponent },
  { path: 'suivi', component: SuiviComponent },
  { path: 'paiement', component: PaiementComponent },
  { path: '**', component: ArticlesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
