import { Routes } from '@angular/router';
import { AjoutPieces } from './ajout-pieces/ajout-pieces';
import { Acceuil } from './acceuil/acceuil';
import { Connexion } from './connexion/connexion';
import { Compte } from './compte/compte';

import { StockComponent } from './stock/stock';


export const routes: Routes = [

  {path:'', component: Acceuil} ,
  {path:'ajout-pieces', component: AjoutPieces},
  {path:'connexion', component: Connexion},
  {path:'compte', component: Compte},
  {path:'stock', component: StockComponent},
  {path:'ajoutspieces', component: AjoutPieces},


];
