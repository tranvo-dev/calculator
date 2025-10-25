import { Component, signal } from '@angular/core';
import { Calculator } from './features/calculator/calculator';

@Component({
  selector: 'app-root',
  imports: [Calculator],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
