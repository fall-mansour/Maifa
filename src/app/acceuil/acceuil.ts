import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, CurrencyPipe, isPlatformBrowser } from '@angular/common';
import { PiecesService } from '../pieces';
import { Piece } from '../pieces';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-acceuil',
  imports: [FormsModule, CurrencyPipe, CommonModule, RouterModule],
  templateUrl: './acceuil.html',
  styleUrl: './acceuil.scss'
})
export class Acceuil implements OnInit, AfterViewInit {
  pieces: Piece[] = [];
  searchText: string = ''; // 🔍 Texte de recherche

  constructor(
    private piecesService: PiecesService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.pieces = this.piecesService.getPieces();
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const imagePaths = ['assets/img1.jpg', 'assets/img2.jpg', 'assets/img3.jpg'];
    const slideshow = document.querySelector('.slideshow');
    if (!slideshow) return;

    imagePaths.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      slideshow.appendChild(img);
    });

    const images = slideshow.querySelectorAll('img');
    if (images.length === 0) return;

    let current = 0;
    images[current].classList.add('active');

    setInterval(() => {
      images[current].classList.remove('active');
      current = (current + 1) % images.length;
      images[current].classList.add('active');
    }, 5000);
  }

  goconnexion() {
    this.router.navigate(['/connexion']);
  }

  get filteredPieces(): Piece[] {
  return this.pieces.filter(piece =>
    piece.description.toLowerCase().includes(this.searchText.toLowerCase())
  );
}

}
