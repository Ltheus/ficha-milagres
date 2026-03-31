import { Component, signal } from '@angular/core';
import { FichaBaseComponent } from './pages/ficha-base/ficha-base.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [FichaBaseComponent],
})
export class App {
  protected readonly title = signal('ficha-mmilagres');
}
