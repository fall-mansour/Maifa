import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-connexion',
  imports: [RouterModule],
  templateUrl: './connexion.html',
  styleUrl: './connexion.scss'
})
export class Connexion {
  constructor(private router:Router) { }

}
