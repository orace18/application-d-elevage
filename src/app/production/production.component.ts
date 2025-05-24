import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-production',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './production.component.html',
})
export class ProductionComponent {
  production = {
    espece: 'Poule',
    race: '',
    males: 0,
    femelles: 0,
    dateEnregistrement: '',
    zone: '',
    remarques: '',
  };

  enregistrerProduction() {
    console.log('Production enregistrée :', this.production);
    // Appel API backend à ajouter ici
  }
}
