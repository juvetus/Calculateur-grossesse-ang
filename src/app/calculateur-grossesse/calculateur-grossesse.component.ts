import { Component } from '@angular/core';

@Component({
  selector: 'app-calculateur-grossesse',
  templateUrl: './calculateur-grossesse.component.html',
  styleUrls: ['./calculateur-grossesse.component.css']
})
export class CalculateurGrossesseComponent {

  ddr!: Date;
  cycleMoyen?: number;
  betaHCG?: number;
  ageGestationnel?: string;
  dateAccouchement?: string;

  calculer() {
    // Calculer l'âge gestationnel
    const joursEcoules = (Date.now() - new Date(this.ddr).getTime()) / 86400000;
    const semainesGrossesse = Math.floor(joursEcoules / 7);
    const joursRestants = Math.floor(joursEcoules % 7);
    this.ageGestationnel = `${semainesGrossesse} semaine(s) et ${joursRestants} jour(s)`;

    // Estimer la date d'accouchement probable
    const ddrPlus9Mois = new Date(this.ddr);
    ddrPlus9Mois.setDate(ddrPlus9Mois.getDate() + 280);
    this.dateAccouchement = ddrPlus9Mois.toLocaleDateString();
  }
}
