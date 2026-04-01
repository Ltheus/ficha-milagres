import { Component, signal } from '@angular/core';
import { FichaBase } from './ficha-base/ficha-base';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FichaBase],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
