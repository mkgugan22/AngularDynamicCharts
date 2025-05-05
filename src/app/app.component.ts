import { Component } from '@angular/core';
import { DchartComponent } from './components/dchart/dchart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DchartComponent],
  templateUrl: './app.component.html', //  <-- CORRECTED
  styleUrl: './app.component.css'
})
export class AppComponent {}