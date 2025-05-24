import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ à importer

@Component({
  selector: 'app-alimentation',
  standalone: true, 
  imports: [CommonModule, FormsModule], 
  templateUrl: './alimentation.component.html',
})
export class AlimentationComponent {
  alimentation = {
    nom: '',
    quantite: null,
    dateLivraison: '',
    datePeremption: '',
    statut: 'en stock',
  };

  ajouterAlimentation() {
    console.log('Alimentation enregistrée :', this.alimentation);
  }
}
