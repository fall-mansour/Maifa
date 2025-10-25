
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { stock,Stockservice } from '../stock';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-stock',
  standalone: true,          // Permet d’utiliser le composant sans module
  imports: [CommonModule,FormsModule],   // Pour pouvoir utiliser *ngFor, *ngIf, etc.
  templateUrl: './stock.html',
  styleUrls: ['./stock.scss']  // ✅ au pluriel !
})
export class StockComponent implements OnInit {
  stocks: stock[] = []; // Tableau pour stocker les éléments reçus

  constructor(private stockService: Stockservice) {}

  ngOnInit(): void {
    // Appel au service pour récupérer les données
    this.stocks = this.stockService.getStocks();
  }
}
