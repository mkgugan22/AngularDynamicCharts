  import { bootstrapApplication } from '@angular/platform-browser';
  import { AppComponent } from './app/app.component';
  import { registerables } from 'chart.js';
  import { Chart } from 'chart.js';

  bootstrapApplication(AppComponent).catch(err => console.error(err));
  Chart.register(...registerables);