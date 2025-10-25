
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Acceuil } from "./acceuil/acceuil";
import { AjoutPieces } from './ajout-pieces/ajout-pieces';
import { Connexion } from './connexion/connexion';
import { Compte } from './compte/compte';

import { StockComponent } from './stock/stock';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Acceuil,AjoutPieces,Connexion,Compte,StockComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('piecebi');
}
