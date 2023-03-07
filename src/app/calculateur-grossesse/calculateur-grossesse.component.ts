import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-calculateur-grossesse',
  templateUrl: './calculateur-grossesse.component.html',
  styleUrls: ['./calculateur-grossesse.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class CalculateurGrossesseComponent {

  ddr!: Date;
  cycleMoyen?: number;
  betaHCG?: number;
  ageGestationnel!: string;
  dateAccouchement!: string | null;
  enceinte!: boolean;





  constructor(private datePipe: DatePipe) {}

  calculer() {


    const ddrDate = new Date(this.ddr);
    const joursEcoules = (Date.now() - ddrDate.getTime()) / 86400000;
    const semainesGrossesse = Math.floor(joursEcoules / 7);
    const joursRestants = Math.floor(joursEcoules % 7);
    this.ageGestationnel = `${semainesGrossesse} semaine(s) et ${joursRestants} jour(s)`;

    const dateAccouchementDate = new Date(ddrDate.getTime() + (280 * 86400000));
    this.dateAccouchement= this.datePipe.transform(dateAccouchementDate, 'dd/MM/yyyy');

    this.enceinte = semainesGrossesse >= 4;
  }



}
